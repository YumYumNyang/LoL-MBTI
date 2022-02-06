export const MBTIMapper = (score) => {
  let num = score.map(el => parseInt(el));
  let EI = num[0]+ num[4]+ num[8];
  let SN = num[1] + num[5] + num[9];
  let FT = num[2] + num[6] + num[10];
  let PJ = num[3] + num[7] + num[11];

  return `${EI <= 4 ? "E" : "I"}${SN <= 4 ? "S" : "N"}${FT <= 4 ? "F" : "T"}${
    PJ <= 4 ? "P" : "J"
  }`;
}