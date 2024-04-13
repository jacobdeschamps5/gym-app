import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Programs from './components/Programs';

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('/api/exercises');
        if (!response.ok) {
          throw new Error('Failed to fetch exercises');
        }

        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="text-white border-r border-neutral-700 overflow-x-hidden">
        <NavBar />
      </div>
      <div className="flex flex-col flex-1 p-4 overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Exercises" element={<Exercises exercises={exercises} />} />
          <Route path="/Programs" element={<Programs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
