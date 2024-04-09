import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import CreateProgramPopup from './CreateProgramPopup';

const Programs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleCreateProgram = (programName) => {
        console.log("Creating program:", programName);
        setShowPopup(false);
    };

    return (
        <div className="flex-1">
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
            <div className="p-2 rounded bg-green-500 float-left" onClick={togglePopup}>
                <FaPlus />
            </div>
            {showPopup && (
                <CreateProgramPopup onClose={togglePopup} onCreateProgram={handleCreateProgram} />
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Place your program cards here */}
            </div>
        </div>
    );
};

export default Programs;


