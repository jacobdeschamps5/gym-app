import React, { useState } from 'react';

const CreateProgramPopup = ({ onClose, onCreateProgram }) => {
    const [programName, setProgramName] = useState('');

    const handleCreateProgram = () => {
        onCreateProgram(programName);
        setProgramName('');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-75 z-10">
            <div className="bg-black p-6 rounded shadow-2xl">
                <h2 className="text-lg font-semibold mb-4">Create Program</h2>
                <input
                    type="text"
                    placeholder="Enter program name"
                    value={programName}
                    onChange={e => setProgramName(e.target.value)}
                    className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
                />
                <div className="flex justify-end">
                    <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={handleCreateProgram}>Create</button>
                    <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CreateProgramPopup;
