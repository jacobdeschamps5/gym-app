import React, { useState } from 'react';

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

    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const dayDate = addDays(currentWeek, i);
        return {
            date: dayDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            name: dayDate.toLocaleDateString('en-US', { weekday: 'long' })
        };
    });

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Home</h2>
            <h2 className="text-2xl font-bold mb-4">Programs</h2>
            
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

            <div className="flex-grow w-full overflow-x-auto">
                <div className="flex justify-center min-w-max">
                    {daysOfWeek.map((day, index) => (
                        <div className='flex flex-col items-center gap-4' key={index}>
                            <div className="border border-gray-300 p-4 relative text-white h-20 w-32 flex flex-col items-center justify-center">
                                <p className="text-xs font-bold">{day.date}</p>
                                <h2 className="text-l font-bold">{day.name}</h2>
                            </div>
                            <div className="border border-gray-300 rounded-md p-4 relative text-white bg-neutral-700 w-32">
                                <h3 className="text-xl font-bold">muh</h3>
                                <p className='italic my-2'><strong>Target:</strong> kkkkkk</p>
                                <p><strong>Description:</strong> jjjjjjj</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
