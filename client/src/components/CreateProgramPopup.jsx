import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CreateProgramPopup = ({ exercises: initialExercises, onClose }) => {
    const [programName, setProgramName] = useState('');
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [selectedExercise, setSelectedExercise] = useState('');
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [exercises, setExercises] = useState(initialExercises);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const availableExercises = initialExercises;

    const handlePreviousDay = () => {
        setSelectedDayIndex((selectedDayIndex - 1 + daysOfWeek.length) % daysOfWeek.length);
    };

    const handleNextDay = () => {
        setSelectedDayIndex((selectedDayIndex + 1) % daysOfWeek.length);
    };

    const handleAddExercise = () => {
        if (selectedExercise) {
            setExercises([...exercises, { name: selectedExercise, day: daysOfWeek[selectedDayIndex], sets, reps }]);
            setSelectedExercise('');
            setSets(0);
            setReps(0);
        }
    };

    const handleCreateProgram = async () => {
        const program = {
            name: programName,
            days: {}
        };
        
        exercises.forEach(exercise => {
            if (exercise.day && exercise.sets !== undefined && exercise.reps !== undefined) {
                if (!program.days[exercise.day]) {
                    program.days[exercise.day] = [];
                }
                program.days[exercise.day].push({ name: exercise.name, sets: exercise.sets, reps: exercise.reps });
            }
        });


        console.log(program);

        const response = await fetch('/api/programs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(program)
        });

        setProgramName('');
        setExercises([]);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-95 z-10">
            <div className="p-4 relative bg-black overflow-y-auto lg:overflow-hidden max-h-[500px] w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl">
                <div className='flex justify-center items-center mb-2' >
                    <input
                        type="text"
                        placeholder="Program Name"
                        value={programName}
                        onChange={(e) => setProgramName(e.target.value)}
                        className="w-full sm:w-auto pl-2 py-2 bg-transparent placeholder-neutral-600 text-white text-center border-b-2 text-2xl rounded-md focus:outline-none sm:mb-0 sm:mr-2"
                    />
                </div>
                <div className="flex justify-center items-center my-4">
                    <IoIosArrowBack className=" text-green-500 h-8 w-8" onClick={handlePreviousDay}/>
                    <span className="text-lg font-semibold px-8">{daysOfWeek[selectedDayIndex]}</span>
                    <IoIosArrowForward className="text-green-500 h-8 w-8" onClick={handleNextDay}/>
                </div>

                <div className="flex flex-col lg:flex-row mb-4 lg:items-center">
                    <select
                        value={selectedExercise}
                        onChange={(e) => {setSelectedExercise(e.target.value)}}
                        className="flex-1 pl-2 pr-10 py-2 bg-neutral-800 placeholder-neutral-600 text-white rounded-md focus:outline-none mb-2 sm:mb-0 sm:mr-2"
                    >
                        <option value="">Select an exercise</option>
                        {availableExercises.map((exercise, index) => (
                            <option key={index} value={exercise.exerciseId}>{exercise.title}</option>
                        ))}
                    </select>
                    <span className="text-white m-2 ml-0">Sets:</span>
                    <input
                        type="number"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        className="w-full sm:w-auto pl-2 pr-2 py-2 bg-neutral-800 placeholder-neutral-600 text-white rounded-md focus:outline-none mb-2 sm:mb-0 sm:mr-2"
                    />
                    
                    <span className="text-white  m-2 ml-0">Reps:</span>
                    <input
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        className="w-full sm:w-auto pl-2 pr-2 py-2 bg-neutral-800 placeholder-neutral-600 text-white rounded-md focus:outline-none"
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleAddExercise}>
                            Add Exercise
                    </button>
                </div>

                <div className="overflow-hidden lg:overflow-y-auto max-h-40">
                    {exercises
                        .filter(exercise => exercise.day === daysOfWeek[selectedDayIndex])
                        .map((exercise, index) => (
                            <div key={index} className="text-lg mb-2">
                                {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}
                            </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleCreateProgram}
                    >
                        Create
                    </button>
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateProgramPopup;

