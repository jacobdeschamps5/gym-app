import React from 'react';
import { useState, useEffect } from 'react';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };
  
    useEffect(() => {
      fetchWorkouts();
    }, []); 


    return (
    <div className>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Workouts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {workouts.map(workout => (
            <div key={workout.id} className="border border-neutral-700 rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2">{workout.name}</h3>
              <p><strong>Target Muscle:</strong> {workout.muscle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Workouts;