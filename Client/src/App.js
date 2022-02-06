
import { Route, Routes } from 'react-router-dom';
import './App.css';
import All from './pages/All';
import Champ from './pages/Champ';
import Page404 from './pages/Page404';
import Result from './pages/Result';
import Start from './pages/Start';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result">
          <Route path=":resultId" element={<Result />} />
        </Route>
        <Route path="/champ">
          <Route path=":champId" element={<Champ />} />
        </Route>
        <Route path="all" element={<All />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
