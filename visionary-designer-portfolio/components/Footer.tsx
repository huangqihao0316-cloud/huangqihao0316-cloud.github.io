
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200/50 py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-bold tracking-tighter mb-6">VISIO <span className="text-[#0071e3]">DESIGN</span></h3>
            <p className="text-[#86868b] text-lg font-light tracking-wide max-w-sm leading-relaxed">
              致力于用设计连接现实与数字，为每一个像素注入生命。
              追求极致，始于平凡。
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-widest">探索 · PORTFOLIO</span>
            <div className="flex flex-col gap-4 text-[14px] text-[#424245] font-medium tracking-wide">
              <a href="#projects" className="hover:text-[#0071e3] apple-transition">精选作品集</a>
              <a href="#" className="hover:text-[#0071e3] apple-transition">个人实验室</a>
              <a href="#" className="hover:text-[#0071e3] apple-transition">设计指南</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-widest">联结 · CONNECT</span>
            <div className="flex flex-col gap-4 text-[14px] text-[#424245] font-medium tracking-wide">
              <a href="#" className="hover:text-[#0071e3] apple-transition">ZCOOL 站酷</a>
              <a href="#" className="hover:text-[#0071e3] apple-transition">Dribbble</a>
              <a href="#" className="hover:text-[#0071e3] apple-transition">Behance</a>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-[#d2d2d7]/50 mb-16" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="flex flex-col items-start">
            <p className="text-[10px] text-[#86868b] uppercase tracking-[0.2em] mb-4 font-bold">Academic Portal · 学术入口</p>
            <a 
              href="https://www.nbufe.edu.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-white border border-[#d2d2d7]/60 hover:border-[#0071e3]/50 px-8 py-5 rounded-[2.5rem] apple-transition hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="w-14 h-14 rounded-3xl bg-[#0071e3] flex items-center justify-center text-white text-lg font-black shadow-lg shadow-blue-500/20">
                NB
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] apple-transition tracking-tight">宁波财经学院入口</span>
                <span className="text-[11px] text-[#86868b] uppercase tracking-widest font-bold mt-1">NBUFE · Creative Campus</span>
              </div>
              <div className="ml-6 w-12 h-12 rounded-full border border-[#d2d2d7] flex items-center justify-center group-hover:bg-[#0071e3] group-hover:border-[#0071e3] group-hover:text-white apple-transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-[#0071e3]/30" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#bf5af2]/30" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#ff375f]/30" />
            </div>
            <p className="text-[13px] text-[#86868b] font-medium tracking-wide">
              &copy; {new Date().getFullYear()} <span className="text-[#1d1d1f]">Visio Studio</span>. Crafted with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
