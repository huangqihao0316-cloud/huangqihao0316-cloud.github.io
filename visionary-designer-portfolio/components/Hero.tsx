
import React, { useState, useEffect } from 'react';

const words = ["个人作品集", "Personal Portfolio"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const pauseTimeout = setTimeout(() => {
        setReverse(true);
      }, 3000); 
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 550);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="max-w-5xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-header mb-8 text-gradient leading-[1.2] min-h-[1.5em] flex items-center justify-center">
          <span className="inline-block font-medium">
            {`${words[index].substring(0, subIndex)}`}
            <span className={`${blink ? 'opacity-100' : 'opacity-0'} ml-1 text-blue-500 font-light`}>|</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#86868b] font-light max-w-3xl mx-auto tracking-wide leading-relaxed">
          致力于打造极致、优雅且具有呼吸感的平面与交互体验。 <br className="hidden md:block" />
          探索黄琦豪的视觉世界。
        </p>
      </div>
      
      <div className="mt-16 flex flex-col sm:flex-row gap-6 relative z-10">
        <a href="#projects" className="px-10 py-3.5 bg-[#0071e3] text-white rounded-full font-medium text-base apple-transition hover:bg-[#0077ed] hover:scale-[1.03] active:scale-95 shadow-xl shadow-blue-500/10">
          浏览精选作品
        </a>
        <button className="px-10 py-3.5 bg-white/80 apple-blur border border-[#d2d2d7] rounded-full font-medium text-base apple-transition hover:bg-white active:scale-95 text-[#1d1d1f]">
          即刻开启对话
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[160px] animate-blob" />
        <div className="absolute bottom-0 -right-40 w-[700px] h-[700px] bg-purple-200/20 rounded-full blur-[160px] animate-blob" style={{ animationDelay: '-5s' }} />
      </div>
    </section>
  );
};

export default Hero;
