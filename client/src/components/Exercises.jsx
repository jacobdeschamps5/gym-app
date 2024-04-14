// Exercises.js
import React, { useState } from 'react';
import ExercisePopup from './ExercisePopup';

const Exercises = ({ exercises }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleClosePopup = () => {
    setSelectedExercise(null);
  };

  const filteredExercises = exercises.filter(exercise =>
    exercise.title && exercise.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Exercise Library</h2>
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="pl-2 pr-10 py-2 bg-neutral-800 placeholder-neutral-600 mb-4 text-white rounded-md focus:outline-none"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises.map(exercise => (
            <div key={exercise.id} className="border border-gray-300 md p-4 relative bg-neutral-700 hover:text-green-500 hover:border-green-500" onClick={() => handleExerciseClick(exercise)} >
              <button className="absolute top-0 right-0 p-3 text-3xl text-gray-400 hover:text-white" onClick={() => { console.log("Add exercise:", exercise.name); }}>
                +
              </button>
              <h3 className="text-xl font-bold">{exercise.title}</h3>
              <p className='italic my-2'><strong>Target:</strong> {exercise.target}</p>
              <p><strong>Description:</strong> {exercise.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {selectedExercise && <ExercisePopup exercise={selectedExercise} onClose={handleClosePopup}/>}
      </div>
    </div>
  );
};

export default Exercises;
