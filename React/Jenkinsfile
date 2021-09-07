properties([pipelineTriggers([githubPush()])])
// Jenkinsfile
pipeline {
    agent { // 파이프라인을 실행하기 위한 노드(Pod) 정의
        kubernetes { // 쿠버네티스 리소스를 정의하는 YAML 파일 형태로도 표현 가능
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: git # git container 실행(원격 repository에서 소스코드 복제)
    image: alpine/git
    tty: true 
    command: ["cat"]
    env:
    - name: PROJECT_URL
      value: <GITHUB_URL>
  - name: docker # docker container 실행(dockerfile을 기반으로 이미지 생성)
    image: docker
    tty: true 
    command: ["cat"]
    env:
    - name: PROJECT_NAME
      value: <APP_NAME>
    volumeMounts: # DinD(Docker-in-Docker)를 위한 볼륨 마운트
    - mountPath: /var/run/docker.sock
      name: docker-socket
  volumes:
  - name: docker-socket
    hostPath:
      path: /var/run/docker.sock
'''
        }
    }
    stages {
      stage('Checkout') {
        steps {
          container('git') {
            // clone source code
            sh "git clone \$PROJECT_URL"
          }
        }
      } 
      stage('Build') {
        steps {
          container('docker') {
            // build docker image
            sh """
            cd \$PROJECT_NAME
            docker build -t \$PROJECT_NAME .
            """
          }
        }
      }
      stage('Push') {
        steps {
          container('docker') {
            // get dockerhub credentials
            withCredentials([[$class: 'UsernamePasswordMultiBinding',
              credentialsId: 'dockerhub',
              usernameVariable: 'DOCKERHUB_USER',
              passwordVariable: 'DOCKERHUB_PASSWORD']]) {
              // image packaging and upload
              sh """
                docker login -u ${DOCKERHUB_USER} -p ${DOCKERHUB_PASSWORD}
                docker tag \$PROJECT_NAME ${DOCKERHUB_USER}/\$PROJECT_NAME
                docker push ${DOCKERHUB_USER}/\$PROJECT_NAME
              """
            }
          }
        }
    }
  }
}
