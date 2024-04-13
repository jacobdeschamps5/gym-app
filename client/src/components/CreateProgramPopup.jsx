import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CreateProgramPopup = ({ onClose, onCreateProgram }) => {
    const [programName, setProgramName] = useState('');
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [exercises, setExercises] = useState([]);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handlePreviousDay = () => {
        setSelectedDayIndex((selectedDayIndex - 1 + daysOfWeek.length) % daysOfWeek.length);
    };

    const handleNextDay = () => {
        setSelectedDayIndex((selectedDayIndex + 1) % daysOfWeek.length);
    };

    const handleAddExercise = () => {
        // Here, you can implement the logic to add an exercise.
        // For simplicity, let's just add a placeholder exercise for now.
        setExercises([...exercises, { name: 'Exercise', day: daysOfWeek[selectedDayIndex] }]);
    };

    const handleCreateProgram = () => {
        const program = {
            name: programName,
            days: {}
        };
        
        exercises.forEach(exercise => {
            if (!program.days[exercise.day]) {
                program.days[exercise.day] = [];
            }
            program.days[exercise.day].push(exercise.name);
        });

        console.log(program);
        onCreateProgram(program);
        setProgramName('');
        setExercises([]);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-95 z-10">
            <div className="p-4 relative bg-black overflow-y-auto m-auto max-h-[500px] max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl">
                <h2 className="text-lg font-semibold mb-4">Create Program</h2>
                <input
                    type="text"
                    placeholder="Enter program name"
                    value={programName}
                    onChange={(e) => setProgramName(e.target.value)}
                    className="pl-2 pr-10 py-2 bg-neutral-800 placeholder-neutral-600 mb-4 text-white rounded-md focus:outline-none"
                />
                <div className="flex justify-between mb-4">
                    <IoIosArrowBack className=" text-green-500 h-8 w-8"
                        onClick={handlePreviousDay}/>

                    <span className="text-lg font-semibold">{daysOfWeek[selectedDayIndex]}</span>

                    <IoIosArrowForward className="text-green-500 h-8 w-8"
                        onClick={handleNextDay}/>
                </div>

                <div>
                    {/* Display the added exercises for the selected day */}
                    {exercises
                        .filter(exercise => exercise.day === daysOfWeek[selectedDayIndex])
                        .map((exercise, index) => (
                            <div key={index} className="mb-2">
                                {exercise.name} - {exercise.day}
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2" onClick={handleAddExercise}>
                        Add Exercise
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateProgramPopup;
