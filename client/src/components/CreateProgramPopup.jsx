import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CreateProgramPopup = ({ onClose, onCreateProgram }) => {
    const [programName, setProgramName] = useState('');
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handlePreviousDay = () => {
        setSelectedDayIndex((selectedDayIndex - 1 + daysOfWeek.length) % daysOfWeek.length);
    };

    const handleNextDay = () => {
        setSelectedDayIndex((selectedDayIndex + 1) % daysOfWeek.length);
    };

    const handleCreateProgram = () => {
        onCreateProgram(programName, daysOfWeek[selectedDayIndex]);
        setProgramName('');
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


