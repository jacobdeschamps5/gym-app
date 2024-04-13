import React from 'react';
import { IoMdClose } from "react-icons/io";

const ExercisePopup = ({ exercise, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-95 z-10'>
      <IoMdClose className="absolute top-0 right-0 m-4 text-white h-8 w-8" onClick={onClose}/>
      <div className='p-4 relative bg-black overflow-y-auto m-auto max-h-[500px] max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl rounded shadow'>
        <h1 className='text-center text-2xl'>{exercise.title}</h1>
        <p className='italic my-2 text-center'><strong>Target:</strong> {exercise.target}</p>
        <div className="flex flex-col lg:flex-row gap-4 p-4 items-center lg:items-start justify-center "> {/* Flex container */}
          <div className="order-2 lg:order-1"> {/* Description container */}
            <div>
              <h3 className='text-xl font-bold mb-2 underline'>How to do it:</h3>
              <ol>
                {exercise.how_to.map((step, index) => (
                  <li className='mb-2' key={index}>{index + 1}. {step}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="order-1 lg:order-2"> {/* Image container */}
            <img src={exercise.image_link} alt={exercise.title} className='rounded  max-w-64 md:max-w-72 h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePopup;
