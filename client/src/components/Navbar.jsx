import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { IoMdBookmarks  } from 'react-icons/io';
import { Link } from 'react-router-dom';

// Define the Tailwind CSS classes
const iconClasses = 'transition duration-300 ease-in-out h-12 w-12 hover:bg-green-500 p-2 rounded-lg';
const selectedIconClasses = 'border-2 border-green-500';

export default function NavBar(){
    const location = useLocation();
    const [selectedIcon, setSelectedIcon] = useState(getSelectedIcon(location.pathname));

    function getSelectedIcon(pathname) {
        if (pathname === "/Exercises") {
            return 'exercises';
        } else if (pathname === "/Programs") {
            return 'programs';
        } else if (pathname === "/") {
            return 'home'; 
        }
    }

    useEffect(() => {
        setSelectedIcon(getSelectedIcon(location.pathname));
    }, [location.pathname]);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    return(
        <div className='px-2 grid gap-4 grid-cols-1 pt-4'>
            <Link to="/" onClick={() => handleIconClick('home')}>
                <FaHouse className={`${iconClasses} ${selectedIcon === 'home' ? selectedIconClasses : ''}`} />
            </Link>
            <Link to="/Exercises" onClick={() => handleIconClick('exercises')}>
                <CgGym className={`${iconClasses} ${selectedIcon === 'exercises' ? selectedIconClasses : ''}`} />
            </Link>
            <Link to="/Programs" onClick={() => handleIconClick('programs')}>
                <IoMdBookmarks className={`${iconClasses} ${selectedIcon === 'programs' ? selectedIconClasses : ''}`} />
            </Link>
        </div>
    )
}
