import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CreateProgramPopup from './CreateProgramPopup';

const Program = ({ program, isActive, setActive }) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleNextDay = () => {
        setSelectedDayIndex((prevIndex) => (prevIndex + 1) % daysOfWeek.length);
    };

    const handlePrevDay = () => {
        setSelectedDayIndex((prevIndex) => (prevIndex - 1 + daysOfWeek.length) % daysOfWeek.length);
    };

    return (
        <div className={`bg-black border text-white p-4 rounded shadow-md mb-4 ${isActive ? 'active-program' : ''}`}>
            <h3 className="text-lg font-semibold mb-2">{program.name}</h3>
            <div className="flex justify-start items-center mb-2">
                <IoIosArrowBack className="text-green-500 h-8 w-8" onClick={handlePrevDay}/>
                <span className='mx-2'>{daysOfWeek[selectedDayIndex]}</span>
                <IoIosArrowForward className="text-green-500 h-8 w-8" onClick={handleNextDay}/>
            </div>
            {program.days[daysOfWeek[selectedDayIndex]] && (
                <ul>
                    {program.days[daysOfWeek[selectedDayIndex]].map((exercise, index) => (
                        <li key={index}>{exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}</li>
                    ))}
                </ul>
            )}
            <button onClick={() => setActive(program)} className={`px-4 py-2 rounded mt-2 ${isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {isActive ? 'Active' : 'Set Active'}
            </button>
        </div>
    );
};


const Programs = ({ exercises }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [activeProgram, setActiveProgram] = useState(null);

    const fetchPrograms = async () => {
        try {
            const response = await fetch('/api/programs');
            if (!response.ok) {
                throw new Error('Failed to fetch programs');
            }
    
            const data = await response.json();
            setPrograms(data);
    
            const activeProgram = data.find(program => program.isActive);
            if (activeProgram) {
                setActiveProgram(activeProgram); // Set the active program
            } else {
                setActiveProgram(null); // Reset active program if none found
            }
        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    };

    useEffect(() => {
        fetchPrograms();
    }, []);

    const handleCreateProgram = async () => {
        setShowPopup(false);
        fetchPrograms();
    };

    const handleSetActive = async (program) => {
        try {

            if (activeProgram !== program) {
                console.log("Activate: " + program);
                
                const response = await fetch(`/api/programs/${program._id}/activate`, {
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',          
                    },
                });
            }
            else {
                await fetch(`/api/programs/${program._id}/deactivate`, {
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });            
            }
    
            setActiveProgram((prevActiveProgram) => {
                if (prevActiveProgram === program) {
                    return null; 
                } else {
                    return program; 
                }
            });
        } catch (error) {
            console.error('Error activating program:', error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Programs</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search programs..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="text-base pl-2 pr-10 py-2 bg-neutral-800 placeholder-neutral-600 text-white rounded-md focus:outline-none"
                />
            </div>
            <FaPlus onClick={() => setShowPopup(true)} className='h-8 w-8 bg-green-500 p-2 rounded mb-4' />
            {showPopup && (
                <CreateProgramPopup exercises={exercises} onClose={() => setShowPopup(false)} onCreateProgram={handleCreateProgram} />
            )}

            <div>
                {programs.map((program) => (
                    <Program 
                        key={program._id} 
                        program={program} 
                        exercises={exercises} 
                        isActive={activeProgram == program} 
                        setActive={handleSetActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default Programs;
