import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar'; function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full bg-white font-['Pretendard'] selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section (Light) */}
      <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Main Interaction Area */}
        <div
          className="relative z-10 flex flex-col items-center py-8 px-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Centered Text */}
          <motion.div
            className="text-8xl md:text-[10rem] lg:text-[14rem] font-['Montserrat'] font-black tracking-tight cursor-default text-[#121212] mb-8 leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: isHovering ? 1.05 : 1
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.4, ease: "easeOut" }
            }}
          >
            PLK
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-gray-600 text-sm md:text-base font-normal text-center leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovering ? 1 : 0,
              y: isHovering ? 0 : 10
            }}
            transition={{
              duration: 0.8,
              delay: isHovering ? 0.2 : 0,
              ease: "easeOut"
            }}
          >
            <p>기획, 설계, 마케팅, 운영까지 전체 흐름을 이해하고 움직이는 UX UI 디자이너입니다.</p>
            <p>사용자 경험은 물론, 기획부터 운영까지의 흐름을 이해하며, <span className="font-extrabold">제품의 <span className="text-[#121212]">맥락</span></span>을 중심에 두고 설계합니다.</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section (Vertical List) */}
      {/* Projects Section (3-Column Grid) */}
      <section id="projects" className="w-full bg-[#f8f8f8] pt-32 pb-16">
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold mb-24 text-black tracking-tighter text-center leading-none">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-24 px-4 2xl:px-8 w-full mx-auto">
          {/* Project 1 */}
          <div className="group cursor-pointer flex flex-col transition-transform duration-300">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative bg-gray-200">
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">UX Research</span>
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">UI/UX Design</span>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}project1_v3.png`}
                alt="골프장 통합 ERP시스템"
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="pt-8 pb-2 bg-[#f8f8f8] flex flex-col justify-center items-center text-center">
              <div className="text-xl sm:text-2xl lg:text-[1.75rem] leading-snug w-full mx-auto break-keep">
                <h3 className="font-extrabold text-[#333333] tracking-tight inline transition-colors duration-300 group-hover:text-black uppercase">골프장 통합 ERP시스템</h3>
                <span className="text-gray-500 font-medium inline ml-2 md:ml-3">— 골프장 관리의 새로운 기준, 시작에서부터 끝의 모든 프로세스를 한번에!</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer flex flex-col transition-transform duration-300">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative bg-gray-200">
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">App Design</span>
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">Prototyping</span>
              </div>
              <span className="text-gray-400 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 group-hover:scale-105">Image Placeholder 2</span>
            </div>
            <div className="pt-8 pb-2 bg-[#f8f8f8] flex flex-col justify-center items-center text-center">
              <div className="text-xl sm:text-2xl lg:text-[1.75rem] leading-snug w-full mx-auto break-keep">
                <h3 className="font-extrabold text-[#333333] tracking-tight inline transition-colors duration-300 group-hover:text-black uppercase">E-Commerce App UX Improvement</h3>
                <span className="text-gray-500 font-medium inline ml-2 md:ml-3">— 서브타이틀 영역</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer flex flex-col transition-transform duration-300">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative bg-gray-200">
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">Design System</span>
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">B2B</span>
              </div>
              <span className="text-gray-400 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 group-hover:scale-105">Image Placeholder 3</span>
            </div>
            <div className="pt-8 pb-2 bg-[#f8f8f8] flex flex-col justify-center items-center text-center">
              <div className="text-xl sm:text-2xl lg:text-[1.75rem] leading-snug w-full mx-auto break-keep">
                <h3 className="font-extrabold text-[#333333] tracking-tight inline transition-colors duration-300 group-hover:text-black uppercase">B2B SaaS Dashboard Pattern</h3>
                <span className="text-gray-500 font-medium inline ml-2 md:ml-3">— 서브타이틀 영역</span>
              </div>
            </div>
          </div>

          {/* Project 4 (Duplicate of 1) */}
          <div className="group cursor-pointer flex flex-col transition-transform duration-300">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative bg-gray-200">
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">UX Research</span>
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">UI/UX Design</span>
              </div>
              <span className="text-gray-400 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 group-hover:scale-105">Image Placeholder 4</span>
            </div>
            <div className="pt-8 pb-2 bg-[#f8f8f8] flex flex-col justify-center items-center text-center">
              <div className="text-xl sm:text-2xl lg:text-[1.75rem] leading-snug w-full mx-auto break-keep">
                <h3 className="font-extrabold text-[#333333] tracking-tight inline transition-colors duration-300 group-hover:text-black uppercase">골프장 통합 ERP시스템</h3>
                <span className="text-gray-500 font-medium inline ml-2 md:ml-3">— 골프장 관리의 새로운 기준, 시작에서부터 끝의 모든 프로세스를 한번에!</span>
              </div>
            </div>
          </div>

          {/* Project 5 (Duplicate of 2) */}
          <div className="group cursor-pointer flex flex-col transition-transform duration-300">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative bg-gray-200">
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">App Design</span>
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">Prototyping</span>
              </div>
              <span className="text-gray-400 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 group-hover:scale-105">Image Placeholder 5</span>
            </div>
            <div className="pt-8 pb-2 bg-[#f8f8f8] flex flex-col justify-center items-center text-center">
              <div className="text-xl sm:text-2xl lg:text-[1.75rem] leading-snug w-full mx-auto break-keep">
                <h3 className="font-extrabold text-[#333333] tracking-tight inline transition-colors duration-300 group-hover:text-black uppercase">E-Commerce App UX Improvement</h3>
                <span className="text-gray-500 font-medium inline ml-2 md:ml-3">— 서브타이틀 영역</span>
              </div>
            </div>
          </div>

          {/* Project 6 (Duplicate of 3) */}
          <div className="group cursor-pointer flex flex-col transition-transform duration-300">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative bg-gray-200">
              <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">Design System</span>
                <span className="text-white outline-none rounded-full text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-[#121212] tracking-wider uppercase">B2B</span>
              </div>
              <span className="text-gray-400 font-medium absolute inset-0 flex items-center justify-center transform transition-transform duration-1000 group-hover:scale-105">Image Placeholder 6</span>
            </div>
            <div className="pt-8 pb-2 bg-[#f8f8f8] flex flex-col justify-center items-center text-center">
              <div className="text-xl sm:text-2xl lg:text-[1.75rem] leading-snug w-full mx-auto break-keep">
                <h3 className="font-extrabold text-[#333333] tracking-tight inline transition-colors duration-300 group-hover:text-black uppercase">B2B SaaS Dashboard Pattern</h3>
                <span className="text-gray-500 font-medium inline ml-2 md:ml-3">— 서브타이틀 영역</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="w-full bg-white py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black tracking-tight">Expertise</h2>

          {/* Split Content Area */}
          <div className="border-t border-gray-300 py-12 flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="md:w-1/3">
              <span className="text-sm font-bold text-gray-400 mb-2 block">01</span>
              <h3 className="text-2xl font-bold text-black">UX/UI Design</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 leading-relaxed text-lg">
                사용자의 니즈와 비즈니스 목표를 연결하는 직관적이고 아름다운 인터페이스를 설계합니다.
                단순한 화면 구성을 넘어, 사용자가 목적을 달성하는 전체 여정을 섬세하게 계획합니다.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-300 py-12 flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="md:w-1/3">
              <span className="text-sm font-bold text-gray-400 mb-2 block">02</span>
              <h3 className="text-2xl font-bold text-black">Product Strategy</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 leading-relaxed text-lg">
                제품의 라이프사이클 전반에 걸친 전략을 수립합니다. 데이터에 기반한 의사결정과
                사용자 리서치를 통해 시장에서 경쟁력 있는 프로덕트를 만들어냅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hover Chip */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed pointer-events-none z-50 text-sm md:text-base px-4 py-1.5 rounded-lg font-extrabold tracking-wide shadow-2xl backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            맥락
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;
