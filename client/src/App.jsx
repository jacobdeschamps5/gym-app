import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Goals from './components/Goals';


function App() {
  return (
    <div className="flex h-screen">
    <div className="text-white border-r border-neutral-700 ">
      <NavBar />
    </div>
    <div className="flex-grow p-6 md">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Workouts" element={<Workouts />} />
        <Route path="/Goals" element={<Goals />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
