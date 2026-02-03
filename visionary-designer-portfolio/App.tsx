
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import ProjectGrid from './components/ProjectGrid';
import DiscoveryGrid from './components/DiscoveryGrid';
import PhotographySection from './components/PhotographySection';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';
import { MY_PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(MY_PROJECTS);

  useEffect(() => {
    const results = MY_PROJECTS.filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      
      <main className="flex-grow pt-12">
        <Hero />
        
        <section id="about" className="py-32 overflow-hidden relative border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <ResumeSection />
          </div>
        </section>

        <div id="projects" className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative">
          <SearchSection 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            resultCount={filteredProjects.length}
          />
          
          <div className="mt-24">
            <h2 className="text-4xl font-black mb-12 tracking-tight text-gray-900">
              精选作品 <span className="text-blue-600">FEATURED</span>
            </h2>
            <ProjectGrid projects={filteredProjects} />
          </div>

          <PhotographySection />
          
          <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-blue-100 via-transparent to-transparent hidden lg:block" />
        </div>

        <section id="discovery" className="bg-[#f5f5f7] py-32 border-y border-gray-100 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-gray-900">设计发现 <span className="text-pink-500">DISCOVERY</span></h2>
                <p className="text-gray-500 mt-4 text-xl font-medium max-w-xl leading-relaxed">探索来自全球创作者的热门设计。在这个充满活力的社区中寻找灵感。</p>
              </div>
              <button className="text-sm font-bold bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                查看更多发现
              </button>
            </header>
            <DiscoveryGrid />
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-40">
             <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200 rounded-full blur-[100px]" />
             <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-[100px]" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
