import logo from './logo.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import Question from './pages/Question';
import Home from './pages/Home';
import { useRef } from 'react';
import Result from './pages/Result';

function App() {
  const ref = useRef(null);
  localStorage.clear();
  return (
    <div ref={ref}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path={'/questions'} element={<Question />} />
        <Route path={'/result/:id'} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
