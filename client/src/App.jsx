import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
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

    fetchWorkouts();

    // Cleanup function if needed
    return () => {
      // Any cleanup code
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
