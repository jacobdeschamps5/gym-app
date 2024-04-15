// Stats.js
import React from 'react';
import { getStatValue, stats } from '../stats';

const Stats = () => {


  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">User Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map(stat => (
            <div key={stat.key} className="border border-gray-300 md p-4 relative bg-neutral-700 hover:text-green-500 hover:border-green-500">
              <h3 className="text-xl font-bold">{stat.name}</h3>
              <p className='italic my-2'>{getStatValue(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
