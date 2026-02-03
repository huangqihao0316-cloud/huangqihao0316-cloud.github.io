
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-gray-100/80">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">
            VISIO
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-[#1d1d1f] tracking-premium opacity-80 uppercase">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Portfolio</a>
            <a href="#discovery" className="hover:opacity-100 transition-opacity">Discovery</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[12px] font-semibold bg-[#1d1d1f] text-white px-4 py-1.5 rounded-full hover:bg-black apple-transition tracking-wide">
            LET'S TALK
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
