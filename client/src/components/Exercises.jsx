import React from 'react';
import { useState, useEffect } from 'react';

const Exercises = () => {
    const [exercises, setExercises] = useState([""]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchExercises = async () => {
      try {
        const response = await fetch('/api/exercises');
        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };
  
    useEffect(() => {
      fetchExercises();
    }, []); 

    const filteredExercises = exercises.filter(exercise =>
      exercise.name && exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
    <div className>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Exercise Library</h2>
        <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="text-base pl-2 pr-10 py-2 bg-neutral-800 placeholder-neutral-600 mb-4 text-white rounded-md focus:outline-none"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {filteredExercises.map(exercise => (
              <div key={exercise.id} className="border border-gray-300 rounded-md p-4 relative " >
                  <button className="absolute top-0 right-0 p-3 text-3xl text-gray-600 hover:text-white" onClick={() => {console.log("Add exercise:", exercise.name);}}>
                  +
                  </button>
                  <h3 className="text-lg font-semibold mb-2">{exercise.name}</h3>
                  <p><strong>Target Muscle:</strong> {exercise.muscle}</p>
              </div>
          ))}
          </div>
      </div>
    </div>
    );
};

export default Exercises;