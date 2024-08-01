import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './Components/News';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/sports" element={<News  category="sports"/>} />
        <Route path="/entertainment" element={<News category="entertainment"/>} />
        <Route path="/business" element={<News category="business"/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

