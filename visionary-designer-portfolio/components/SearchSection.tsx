
import React from 'react';

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  resultCount: number;
}

const SearchSection: React.FC<SearchSectionProps> = ({ searchTerm, setSearchTerm, resultCount }) => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-[11px] font-bold text-[#0071e3] uppercase tracking-[0.2em] mb-4">Search Archive · 档案检索</h2>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="寻找灵感、项目名称或类别..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b border-[#d2d2d7] py-4 text-3xl font-light tracking-tight focus:outline-none focus:border-[#0071e3] apple-transition placeholder:text-[#86868b]"
            />
            <div className="absolute right-0 bottom-5 text-[#86868b] group-focus-within:text-[#0071e3] apple-transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-[#86868b] font-medium pb-2 tracking-wide">
          {searchTerm ? (
            <span className="opacity-0 animate-fadeIn" style={{ animationFillMode: 'forwards' }}>
              找到 <span className="text-[#1d1d1f] font-bold">{resultCount}</span> 个匹配项
            </span>
          ) : (
            <span className="opacity-60">探索所有创意沉淀</span>
          )}
        </div>
      </div>
      
      <div className="flex gap-3 mt-10 overflow-x-auto hide-scrollbar pb-2">
        {[
          { label: '全部 ALL', val: '', color: 'bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f]', active: 'bg-[#1d1d1f] text-white shadow-lg' },
          { label: 'UI/UX 设计', val: 'UI/UX', color: 'bg-white border border-[#d2d2d7] hover:border-[#86868b] text-[#1d1d1f]', active: 'bg-[#0071e3] text-white border-transparent' },
          { label: '品牌视觉 BRANDING', val: '品牌', color: 'bg-white border border-[#d2d2d7] hover:border-[#86868b] text-[#1d1d1f]', active: 'bg-[#0071e3] text-white border-transparent' },
          { label: '工业设计 INDUSTRIAL', val: '工业', color: 'bg-white border border-[#d2d2d7] hover:border-[#86868b] text-[#1d1d1f]', active: 'bg-[#0071e3] text-white border-transparent' },
          { label: '3D 可视化', val: '3D', color: 'bg-white border border-[#d2d2d7] hover:border-[#86868b] text-[#1d1d1f]', active: 'bg-[#0071e3] text-white border-transparent' }
        ].map((tag) => (
          <button 
            key={tag.label}
            onClick={() => setSearchTerm(tag.val)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-[12px] font-semibold transition-all duration-300 tracking-wide uppercase ${
              searchTerm === tag.val 
              ? tag.active 
              : tag.color
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
