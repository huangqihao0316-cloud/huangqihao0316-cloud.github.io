
import React from 'react';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="py-32 text-center">
        <p className="text-[#86868b] text-xl font-light tracking-wide">目前没有找到匹配的探索项目。</p>
      </div>
    );
  }

  return (
    <div className="relative -mx-6 lg:-mx-12">
      <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 lg:px-12 gap-8 pb-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="flex-none w-[85vw] md:w-[45vw] lg:w-[35vw] snap-start group cursor-pointer"
          >
            <div 
              className="aspect-[16/10] rounded-[2.5rem] overflow-hidden relative mb-8 apple-transition group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              style={{ backgroundColor: project.color }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 apple-transition group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 apple-transition" />
              
              <div className="absolute top-8 left-8">
                <span className="px-4 py-1.5 bg-white/90 apple-blur text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm text-[#1d1d1f]">
                  {project.year}
                </span>
              </div>
            </div>
            <div className="px-4">
              <p className="text-[#0071e3] text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] opacity-60" />
                {project.category}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-header text-[#1d1d1f] group-hover:text-[#0071e3] apple-transition">{project.title}</h3>
              <p className="text-[#86868b] mt-4 line-clamp-2 max-w-md font-light tracking-wide leading-relaxed text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
