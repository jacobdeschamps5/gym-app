import React from 'react';

const Home = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Home</h2>

            <h2 className="text-2l font-bold mb-4">Programs</h2>
            
            <div className="h-2/5 h-full max-h-screen overflow-x-auto flex flex-col flex-grow border border-gray-300 rounded-md p-4 relative text-white">
                <div className="grid grid-flow-col auto-cols-max gap-4">
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Monday</h2>
                        </div>
                        <div className="border border-gray-300 rounded-md p-4 relative text-white bg-neutral-700">
                            <h3 className="text-xl font-bold">muh</h3>
                            <p className='italic my-2'><strong>Target:</strong> kkkkkk</p>
                            <p><strong>Description:</strong> jjjjjjj</p>
                        </div>
                    </div>
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Tuesday</h2>
                        </div>
                        <div className="border border-gray-300 rounded-md p-4 relative text-white bg-neutral-700">
                            <h3 className="text-xl font-bold">muh</h3>
                            <p className='italic my-2'><strong>Target:</strong> kkkkkk</p>
                            <p><strong>Description:</strong> jjjjjjj</p>
                        </div>
                        <div className="border border-gray-300 rounded-md p-4 relative text-white bg-neutral-700">
                            <h3 className="text-xl font-bold">muh</h3>
                            <p className='italic my-2'><strong>Target:</strong> kkkkkk</p>
                            <p><strong>Description:</strong> jjjjjjj</p>
                        </div>
                    </div>
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Wednesday</h2>
                        </div>
                    </div>
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Thursday</h2>
                        </div>
                    </div>
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Friday</h2>
                        </div>
                    </div>
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Saturday</h2>
                        </div>
                    </div>
                    <div className='grid gap-4 auto-rows-min'>
                        <div className="border border-gray-300 p-4 relative text-white h-50">
                            <h2 className="text-l font-bold text-center">Sunday</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;