import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Goals from './components/Goals';
import Programs from './components/Programs';


function App() {
  return (
    <div className="flex h-screen">
    <div className="text-white border-r border-neutral-700 ">
      <NavBar />
    </div>
    <div className="flex-grow p-6 md">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Exercises" element={<Exercises />} />
        <Route path="/Goals" element={<Goals />} />
        <Route path="/Programs" element={<Programs />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
