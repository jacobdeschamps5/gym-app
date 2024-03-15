import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from 'react-router-dom';

// Define the Tailwind CSS classes
const iconClasses = 'transition duration-300 ease-in-out h-12 w-12 hover:bg-green-500 p-2 rounded-lg';

export default function NavBar(){
    return(
        <div className='px-4 grid gap-4 grid-cols-1 pt-4'>
            <Link to="/">
                <FaHouse className={iconClasses} />
            </Link>
            <Link to="/Exercises">
                <CgGym className={iconClasses} />
            </Link>
            <Link to="/Goals">
                <TbTargetArrow className={iconClasses} />
            </Link>
        </div>
    )
}


