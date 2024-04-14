import React, { useState, useEffect } from 'react';

const getStartOfWeek = (d) => {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const Home = () => {
    const today = new Date();
    const [currentWeek, setCurrentWeek] = useState(getStartOfWeek(today));
    const [hasNavigated, setHasNavigated] = useState(false);
    const [activeProgram, setActiveProgram] = useState(null);
    const [exerciseData, setExerciseData] = useState({});

    const fetchActiveProgram = async () => {
        try {
            const response = await fetch('/api/programs/active');
            if (!response.ok) {
                throw new Error('Failed to fetch active program');
            }

            const data = await response.json();
            setActiveProgram(data);
        } catch (error) {
            console.error('Error fetching active program:', error);
        }
    };

    useEffect(() => {
        fetchActiveProgram();
    }, []);

    const handleNextWeek = () => {
        setCurrentWeek(addDays(currentWeek, 7));
        setHasNavigated(true);
    };

    const handlePreviousWeek = () => {
        setCurrentWeek(addDays(currentWeek, -7));
    };

    const handleCurrentWeek = () => {
        setCurrentWeek(getStartOfWeek(new Date()));
        setHasNavigated(false);
    };

    const fetchExercisesForDay = async (day, exercises) => {
        const exercisesForDay = exercises[day];
        setExerciseData(prevState => ({ ...prevState, [day]: exercisesForDay }));
    };

    useEffect(() => {
        if (activeProgram) {
            const { days } = activeProgram;
            Object.keys(days).forEach(day => fetchExercisesForDay(day, days));
        }
    }, [activeProgram]);

    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const dayDate = addDays(currentWeek, i);
        return {
            date: dayDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }),
            name: dayDate.toLocaleDateString('en-US', { weekday: 'long' })
        };
    });

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Home</h2>
                        
            <div className="flex w-full justify-between items-center mb-4 px-4">
                {hasNavigated && (
                    <button 
                        className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                        onClick={handlePreviousWeek}
                    >
                        Previous Week
                    </button>
                )}
                <div className="flex-grow" /> {}
                {hasNavigated && (
                    <button 
                        className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
                        onClick={handleCurrentWeek}
                    >
                        Current Week
                    </button>
                )}
                <div className="flex-grow" /> {}
                <button 
                    className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                    onClick={handleNextWeek}
                >
                    Next Week
                </button>
            </div>

            {activeProgram && (<p className='font-bold mb-4'>Current Program: {activeProgram.name}</p>)}

            <div className="flex-grow w-full overflow-x-auto">
                <div className="flex justify-center min-w-max">
                    {daysOfWeek.map((day, index) => (
                        <div className='flex flex-col items-center gap-2' key={index}>
                            <div className="border border-gray-300 p-4 relative text-white h-20 w-40 flex flex-col items-center justify-center">
                                <p className="text-xs font-bold">{day.date}</p>
                                <h2 className="text-l font-bold">{day.name}</h2>
                            </div>
                            {activeProgram && exerciseData[day.name] && (
                                <div>
                                        {exerciseData[day.name].map((exercise, idx) => (
                                            <div className='mb-2 border border-gray-300 p-4 py-2 relative text-white bg-neutral-700 w-40' key={idx}>
                                                <p className='font-bold'>{exercise.name}</p>
                                                <p>Sets: {exercise.sets}</p>
                                                <p>Reps: {exercise.reps}</p>
                                            </div>
                                        ))}

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
