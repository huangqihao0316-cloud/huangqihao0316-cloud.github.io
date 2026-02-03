
import React from 'react';
import { EXTERNAL_WORKS } from '../constants';

const DiscoveryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {EXTERNAL_WORKS.map((work) => (
        <div key={work.id} className="flex flex-col gap-3 group cursor-pointer">
          <div className="aspect-square rounded-2xl overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-500">
            <img 
              src={work.thumbnail} 
              alt={work.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur-[2px] text-white">
              <div className="flex flex-col items-center gap-1 scale-90 group-hover:scale-100 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold">{work.likes}</span>
              </div>
            </div>
          </div>
          <div className="px-1">
            <h4 className="text-sm font-semibold leading-tight line-clamp-1 group-hover:text-blue-500 transition-colors">{work.title}</h4>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">{work.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoveryGrid;
