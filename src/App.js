
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Component1 from './Component1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Component1 /> } />
      </Routes>
    </Router>
  );
}

export default App;
