
import React from 'react';
import { PHOTOGRAPHY_WORKS } from '../constants';

const PhotographySection: React.FC = () => {
  return (
    <div className="py-24">
      <header className="mb-16">
        <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Visual Journal · 摄影纪实</h2>
        <h3 className="text-4xl font-black tracking-tight text-gray-900">瞬间的叙事 <span className="text-blue-500">MOMENTS</span></h3>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {PHOTOGRAPHY_WORKS.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-square md:aspect-auto">
            <img 
              src={photo.image} 
              alt={photo.title}
              className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                photo.aspectRatio === 'portrait' ? 'md:aspect-[3/4]' : 
                photo.aspectRatio === 'landscape' ? 'md:aspect-[4/3]' : 'aspect-square'
              }`}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">{photo.location}</p>
                <h4 className="text-xl font-bold tracking-tight">{photo.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographySection;
