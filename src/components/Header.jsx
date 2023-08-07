/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import lightmode from '../assets/lightmode.png';
import darkmode from '../assets/darkmode.png';

const Header = () => {

    //Theme button Image change
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    //Dark Mode
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div className='w-full h-full bg-white dark:bg-black sticky top-0 border-b-2 border-black dark:border-white'>
        
        <div>
          <h1 className='text-5xl p-4  sm:text-6xl sm:ml-10 font-Lobster dark:text-white'>Listle</h1>
          <p className='font-Kalam ml-14 -mt-4 dark:text-white sm:ml-24'>A To-Do App</p>
        </div>

        <div className='float-right -mt-20 mr-6'>
            <button className='w-12 h-12 ml-64 mt-5' onClick={handleClick}>
                {isClicked ? (<img src={lightmode} onClick={toggleDarkMode} />) : (<img src={darkmode} onClick={toggleDarkMode} />)}
            </button>
        </div>

    </div>
  )
}

export default Header;