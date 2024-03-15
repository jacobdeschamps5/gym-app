import React from 'react';
import { useState, useEffect } from 'react';

const Exercises = () => {
    const [exercises, setExercises] = useState([""]);

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


    return (
    <div className>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Exercise Library</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {exercises.map(exercise => (
            <div key={exercise.id} className="border border-neutral-700 rounded-md p-4">
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