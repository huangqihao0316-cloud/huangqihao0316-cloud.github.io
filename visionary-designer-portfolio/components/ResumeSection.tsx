
import React from 'react';

const ResumeSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      {/* Content Container */}
      <div className="w-full">
        <h2 className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-6">About Me · 个人简介</h2>
        <h3 className="text-5xl md:text-7xl font-bold tracking-header text-[#1d1d1f] mb-4">
          黄琦豪 <span className="text-[#86868b] font-light">Qihao Huang</span>
        </h3>
        <p className="text-2xl md:text-3xl font-medium text-[#1d1d1f] mb-10 tracking-tight">
          平面设计师 <br />
          <span className="text-lg text-blue-600 font-bold tracking-widest uppercase">Graphic Designer</span>
        </p>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-[#86868b] font-light leading-relaxed tracking-wide mb-12">
            作为一名平面设计师，我坚信视觉设计不仅是关于美学，更是关于沟通的艺术。
            我致力于通过色彩、排版与留白的精准掌控，将品牌的核心理念转化为具有冲击力且深入人心的视觉符号。
            从传统的纸媒排版到现代的数字视觉系统，我始终追求细节的极致与形式的和谐，让设计在简约中爆发力量。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-t border-gray-100 pt-10">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Location · 所在地</p>
              <p className="text-sm font-semibold">中国，宁波 · Ningbo, CN</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Focus · 核心关注</p>
              <p className="text-sm font-semibold">视觉传达 & 平面排版</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Inquiry · 合作咨询</p>
              <p className="text-sm font-semibold text-blue-500">开放接洽 · Open to Discuss</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-3.5 bg-[#1d1d1f] text-white rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-black apple-transition">
              View Portfolio · 浏览作品
            </button>
            <div className="flex gap-4 items-center px-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase italic">Huang Qihao Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
