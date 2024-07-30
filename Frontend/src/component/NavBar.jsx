import React, { useState } from 'react';

const NavBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className='relative h-20 flex justify-center'>
      <div className='bg-[#252829] flex absolute p-4 pl-10 pr-10 lg:w-3/4 justify-between rounded-full top-3 w-full md:w-auto fixed shadow-xl'>
        <div className='text-xl text-[#f9fafb]'>Sasikumar</div>
        <nav className='hidden md:flex'>
          <ul className='flex gap-8 text-[#9ca3af]'>
            <li className='hover:text-white cursor-pointer'>About</li>
            <li className='hover:text-white cursor-pointer'>Skills</li>
            <li className='hover:text-white cursor-pointer'>Projects</li>
            <li className='hover:text-white cursor-pointer'>Contact</li>
          </ul>
        </nav>
        <div className='md:hidden flex items-center'>
          <button onClick={openMenu}>
            <svg className='w-6 h-6 text-[#f9fafb]' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpenMenu && (
        <div className="absolute top-20 w-full bg-[#252829] text-[#9ca3af] flex flex-col items-center md:hidden text-center rounded-2xl">
          <ul className="flex flex-col gap-5 py-4">
            <li className="hover:text-white cursor-pointer" onClick={closeMenu}>About</li>
            <li className="hover:text-white cursor-pointer" onClick={closeMenu}>Skills</li>
            <li className="hover:text-white cursor-pointer" onClick={closeMenu}>Projects</li>
            <li className="hover:text-white cursor-pointer" onClick={closeMenu}>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
