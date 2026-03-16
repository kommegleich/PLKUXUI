import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// 뷰포트 768px 미만 시 모바일 레이아웃 활성화
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  // ── Task 3: My Approach 클릭 토글 상태 ──
  // null = 열린 카드 없음, 0/1/2 = 해당 인덱스 카드가 열림
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (idx) => {
    setActiveCard(prev => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 01 - Main Hero & Introduction (PLK Logo & Subtitle) */}
      <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
        {/* Main Interaction Area */}
        <div
          className="relative z-10 flex flex-col items-center py-8 px-4"
          onMouseEnter={() => !isMobile && setIsHovering(true)}
          onMouseLeave={() => !isMobile && setIsHovering(false)}
        >
          {/* ── Task 1: PLK 폰트 크기 키움 clamp(8rem,20vw,22rem) ── */}
          <motion.div
            className="text-[clamp(8rem,20vw,22rem)] font-black tracking-tighter cursor-default text-[#121212] mb-8 leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: (!isMobile && isHovering) ? 1.25 : 1,
              rotateX: (!isMobile && isHovering && typeof window !== 'undefined') ? (mousePosition.y / window.innerHeight - 0.5) * -90 : 0,
              rotateY: (!isMobile && isHovering && typeof window !== 'undefined') ? (mousePosition.x / window.innerWidth - 0.5) * 90 : 0
            }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 900,
              transformPerspective: 500,
              transformStyle: "preserve-3d"
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 3, ease: [0.16, 1, 0.3, 1] },
              rotateX: { type: "spring", stiffness: 80, damping: 20 },
              rotateY: { type: "spring", stiffness: 80, damping: 20 }
            }}
          >
            PLK
          </motion.div>

          {/* Subtitle - 모바일에서는 항상 표시, 데스크톱에선 hover 시 표시 */}
          <motion.div
            className="text-gray-600 text-sm md:text-lg font-normal text-center leading-relaxed max-w-2xl mt-6 md:mt-12 px-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: isMobile ? 1 : (isHovering ? 1 : 0),
              y: isMobile ? 0 : (isHovering ? 0 : 15)
            }}
            transition={{
              duration: 0.8,
              delay: (!isMobile && isHovering) ? 0.2 : 0,
              ease: "easeOut"
            }}
          >
            <p className="tracking-tight">기획, 설계, 마케팅, 운영까지 전체 흐름을 이해하고 움직이는 UXUI디자이너입니다.</p>
            <p className="tracking-tight">사용자 경험은 물론, 기획부터 운영까지의 흐름을 이해하며, <br /><span className="font-extrabold">제품의 <span className="text-[#121212]">맥락</span></span>을 중심에 두고 설계합니다.</p>
          </motion.div>
        </div>
      </section>


      {/* 02 - Projects List Section */}
      <section id="projects" className="w-full bg-[#0d0d0d] pt-24 md:pt-64 pb-32 md:pb-96 text-white">
        {/* ── Task 2: PROJECTS. 타이틀은 그대로 유지 ── */}
        <div className="w-full px-4 md:px-8 mb-12 md:mb-24 flex justify-center">
          <h2 className="text-[clamp(3rem,12vw,14rem)] font-black tracking-tighter leading-tight px-2 text-center">PROJECTS.</h2>
        </div>
        <div className="flex flex-col w-full border-t border-gray-800">
          {[
            {
              title: "골프장 통합관리 시스템",
              desc: "골퍼의 입장부터 결제, 퇴장까지의 전 과정을 아우르며,\n파편화된 기존 관리 시스템의 UI를 표준화하여 실무자의 업무 효율을 극대화한 골프장 B2B 통합 ERP 시스템 설계 프로젝트",
              tags: ["UX 설계", "Design System 구축", "UI 화면설계", "2023.03~2025.05"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#457FF3] hover:to-[#10182B]"
            },
            {
              title: "ARMATURE GOLF LEAGUE (SAGL)",
              desc: "스마트스코어 앱 내에서 누구나 손쉽게 대회에 참여할 수 있도록, \n복잡한 참가 신청의 진입 장벽을 낮추고 직관적인 흐름으로 개선한 아마추어 골프 리그 선수 등록 UX/UI 고도화 프로젝트",
              tags: ["UX 설계", "UI 화면설계", "2023.01~2023.03"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#2D343A] hover:to-[#09122A]"
            },
            {
              title: "스코어를 게이밍하다",
              desc: "단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, \n스마트스코어 프리미엄 멤버십 전용 초개인화 리포트 서비스",
              tags: ["UX 설계", "UI 화면설계", "약 2개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#00FF37] hover:to-[#FF00FB]"
            },
            {
              title: "골프와 선물하기 연계서비스",
              desc: "관계 기반의 리마인드 알림과 맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, \n구매 프로세스를 단축해 전환율을 극대화한 골프 앱 내 커머스(선물하기) UX 전략 및 설계",
              tags: ["UX 설계", "UI 화면설계", "약 4개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#716CA6] hover:to-[#5A4ED7]"
            },
            {
              title: "충전결제 서비스 PAYIS",
              desc: "번거로운 카드 등록 절차 없이 필요한 만큼만 충전하여 사용하는 방식을 채택해, \n개인정보 보호와 직관적인 결제 경험을 동시에 확보한 선불형 간편 결제 앱(App) 구축 프로젝트",
              tags: ["UX 설계", "UI 화면설계", "약 6개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#0073FF] hover:to-[#263044]"
            },
            {
              title: "TALKAK 랜덤 사진전송 서비스",
              desc: "'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, \n복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있는 심플한 랜덤 사진 공유 소셜 서비스",
              tags: ["UX 설계", "UI 화면설계", "약 6개월"],
              bgClass: "hover:bg-gradient-to-r hover:from-[#FD723B] hover:to-[#F26027]"
            }
          ].map((project, index) => (
            <Link
              key={index}
              to={`/project/${index + 1}`}
              className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-16 px-4 md:px-8 border-b border-gray-800 transition-all duration-500 overflow-hidden ${project.bgClass}`}
            >
              {/* Default Title */}
              {/* ── Task 2: 제목 clamp(2.2rem,7vw,7rem) ── */}
              <h3 className="text-[clamp(2.2rem,7vw,7rem)] leading-[1.05] font-pretendard font-black tracking-tighter text-white break-words w-full md:w-5/12 mb-4 md:mb-0 group-hover:hidden transition-colors">
                {project.title}
              </h3>

              {/* Marquee Title (Visible on Hover) */}
              <div className="hidden group-hover:flex overflow-hidden w-full md:w-5/12 mb-4 md:mb-0 mr-0 md:mr-8 items-center h-full">
                <div className="flex w-max animate-custom-marquee">
                  <div className="flex shrink-0">
                    {[...Array(2)].map((_, i) => (
                      <h3 key={i} className="text-[clamp(2.2rem,7vw,7rem)] leading-[1.05] font-pretendard font-black tracking-tighter text-white/90 pr-12 shrink-0">
                        {project.title}
                      </h3>
                    ))}
                  </div>
                  <div className="flex shrink-0">
                    {[...Array(2)].map((_, i) => (
                      <h3 key={i + 2} className="text-[clamp(2.2rem,7vw,7rem)] leading-[1.05] font-pretendard font-black tracking-tighter text-white/90 pr-12 shrink-0">
                        {project.title}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtitle & Chips */}
              <div className="w-full md:w-1/2 flex flex-row items-center justify-between mt-2 md:mt-0">
                <div className="flex flex-col w-full">
                  {/* ── Task 2: desc 폰트 text-base md:text-xl lg:text-2xl ── */}
                  <p className="text-gray-500 font-pretendard font-normal tracking-tight text-base md:text-xl lg:text-2xl break-keep whitespace-pre-line group-hover:text-white transition-colors line-clamp-3 md:line-clamp-none">
                    {project.desc}
                  </p>

                  {/* Chips */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 md:mt-0 md:max-h-0 md:opacity-0 md:overflow-hidden group-hover:mt-6 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {project.tags.map((tag, i) => (
                        /* ── Task 2: tag 폰트 text-xs md:text-base ── */
                        <span key={i} className="text-xs md:text-base font-pretendard text-white border border-white/20 bg-black/10 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hover Chip - 데스크톱에서만 표시 */}
      <AnimatePresence>
        {!isMobile && isHovering && (
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

      {/* 03 - Expertise Section */}
      <section id="expertise" className="relative w-full h-[200vh] bg-[#fff] text-[#121212]">
        <div className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden">
          <div className="w-full px-4 md:px-8 mb-8 md:mb-16 xl:mb-24 flex justify-center">
            <h2 className="text-[clamp(3rem,12vw,14rem)] font-black tracking-tighter leading-tight px-2 text-center">EXPERTISE.</h2>
          </div>

          <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center justify-center xl:items-start gap-10 md:gap-16 xl:gap-8 mt-2 md:mt-10 xl:mt-20">
            {/* Figma Column */}
            <div className="flex flex-col w-full max-w-xs md:max-w-sm items-center xl:items-start shrink-0">
              <div className="mb-4 md:mb-6 flex justify-center xl:justify-start w-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">Design Tool</span>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 w-full justify-center xl:justify-start text-center xl:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F2F2F2] rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-5 shrink-0">
                  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] md:w-[30px] h-full object-contain">
                    <path d="M19 28.5C19 23.25 14.75 19 9.5 19C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38C14.75 38 19 33.75 19 28.5Z" fill="#1ABCFE" />
                    <path d="M0 9.5C0 4.25 4.25 0 9.5 0H19V19H9.5C4.25 19 0 14.75 0 9.5Z" fill="#F24E1E" />
                    <path d="M19 0H28.5C33.75 0 38 4.25 38 9.5C38 14.75 33.75 19 28.5 19H19V0Z" fill="#FF7262" />
                    <path d="M19 19H28.5C33.75 19 38 23.25 38 28.5C38 33.75 33.75 38 28.5 38H19V19Z" fill="#A259FF" />
                    <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5Z" fill="#0AC170" />
                  </svg>
                </div>
                <div className="flex flex-col overflow-hidden h-[4rem] md:h-[5.5rem] xl:h-[5rem] min-w-[160px]">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 md:mb-2">Figma</h3>
                  <div className="flex justify-center xl:justify-start w-full">
                    <RollingSkills skills={["UI Design", "Prototyping", "Design System", "Collaboration"]} color="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Adobe Column */}
            <div className="flex flex-col w-full max-w-xs md:max-w-sm items-center xl:items-start shrink-0">
              <div className="mb-4 md:mb-6 flex justify-center xl:justify-start w-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">Creative Cloud</span>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 w-full justify-center xl:justify-start text-center xl:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF0000] rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-5 shrink-0 shadow-lg shadow-red-100">
                  <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-[24px] md:w-[30px] h-full object-contain">
                    <path d="M14.653 3H21v17.402l-6.347-17.402zm-5.306 0H3v17.402L9.347 3zM12 10.367l4.184 10.035h-3.265l-1.429-3.714H8.714L7.286 20.402H4L12 10.367z" />
                  </svg>
                </div>
                <div className="flex flex-col overflow-hidden h-[4rem] md:h-[5.5rem] xl:h-[5rem] min-w-[160px]">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 md:mb-2">Adobe</h3>
                  <div className="flex justify-center xl:justify-start w-full">
                    <RollingSkills skills={["Photoshop", "Illustrator", "After Effects", "Premiere Pro"]} color="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Development Column */}
            <div className="flex flex-col w-full max-w-xs md:max-w-sm items-center xl:items-start shrink-0">
              <div className="mb-4 md:mb-6 flex justify-center xl:justify-start w-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">Tech Stack</span>
              </div>
              <div className="flex flex-col xl:flex-row items-center gap-4 md:gap-6 w-full justify-center xl:justify-start text-center xl:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#2D2D2D] rounded-xl md:rounded-2xl flex items-center justify-center p-3 shrink-0">
                  <div className="flex gap-0.5 max-w-full justify-center">
                    <svg viewBox="0 0 24 24" fill="#E34F26" xmlns="http://www.w3.org/2000/svg" className="w-[18px] md:w-[22px] h-[18px] md:h-[22px]">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="#1572B6" xmlns="http://www.w3.org/2000/svg" className="w-[18px] md:w-[22px] h-[18px] md:h-[22px]">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden h-[4rem] md:h-[5.5rem] xl:h-[5rem] min-w-[160px]">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-1 md:mb-2">Dev</h3>
                  <div className="flex justify-center xl:justify-start w-full">
                    <RollingSkills skills={["HTML5", "CSS3 / Tailwind", "React.js", "JavaScript"]} color="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - My Approach Section */}
      <section id="approach" className="w-full bg-[#0d0d0d] pt-16 md:pt-32 pb-24 md:pb-48 text-white relative">
        <div className="w-full px-4 md:px-8 mb-12 md:mb-24 flex flex-col items-center">
          <div className="mb-8 md:mb-12">
            <span className="text-[16px] md:text-[30px] font-normal text-gray-400 border border-gray-700 px-5 py-2.5 md:px-10 md:py-5 rounded-[4rem] backdrop-blur-sm tracking-[-0.05em]">about</span>
          </div>
          <h2 className="text-[clamp(2.5rem,10vw,14rem)] font-black tracking-tighter leading-tight px-2 text-center uppercase">
            MY APPROACH.
          </h2>
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 origin-center max-w-sm sm:max-w-lg md:max-w-2xl xl:max-w-none mx-auto">

            {/* ── Task 3: Card 1 — INTUITION ── */}
            <ApproachCard
              index={0}
              number="(01)"
              title="INTUITION"
              korTitle="직관"
              desc="첫 진입부터 다음 행동이 보이는 구조"
              bgColor="bg-[#ffffff]"
              imageSrc={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              imageAlt="pulip kim"
              titleColor="text-[#121212]"
              descColor="text-[#121212]"
              numberColor="text-[#121212]"
              hoverNumberColor="group-hover:text-white"
              activeCard={activeCard}
              onCardClick={handleCardClick}
              isMobile={isMobile}
            >
              {/* 열렸을 때 하단 콘텐츠 */}
              <span className="font-medium tracking-tighter uppercase leading-none text-[clamp(1.5rem,4vw,3.5rem)] text-white mb-2 font-normal">
                PULIP KIM
              </span>
              <p className="font-normal uppercase text-xs md:text-sm lg:text-base text-gray-200">
                ARBEITERINPILITA@GMAIL.COM
              </p>
            </ApproachCard>

            {/* ── Task 3: Card 2 — FLOW ── */}
            <ApproachCard
              index={1}
              number="(02)"
              title="FLOW"
              korTitle="흐름"
              desc="사용자의 목적과 제품의 구조가 일치하는 지점"
              bgColor="bg-[#d9331d]"
              imageSrc={`${import.meta.env.BASE_URL}assets/card2_hover_new.jpg`}
              imageAlt="flow"
              titleColor="text-white"
              descColor="text-white"
              numberColor="text-white/90"
              hoverNumberColor="group-hover:text-white"
              activeCard={activeCard}
              onCardClick={handleCardClick}
              isMobile={isMobile}
            >
              <a href="#projects" className="flex items-center gap-2 cursor-pointer w-fit group/link">
                <span className="font-medium tracking-tighter text-white uppercase leading-none text-[clamp(1.5rem,4vw,3.5rem)] font-normal group-hover/link:underline underline-offset-[8px] decoration-4">
                  MORE WORKS
                </span>
              </a>
            </ApproachCard>

            {/* ── Task 3: Card 3 — CONTEXT ── */}
            <ApproachCard
              index={2}
              number="(03)"
              title="CONTEXT"
              korTitle="맥락"
              desc="화면이 아닌 제품 전체의 구조를 먼저 읽는 것"
              bgColor="bg-[#1b1b1b]"
              imageSrc={`${import.meta.env.BASE_URL}assets/card3_hover_new.jpg`}
              imageAlt="context"
              titleColor="text-white"
              descColor="text-white"
              numberColor="text-white/80"
              hoverNumberColor="group-hover:text-white"
              activeCard={activeCard}
              onCardClick={handleCardClick}
              isMobile={isMobile}
            >
              <a href="mailto:arbeiterinpilita@gmail.com" className="flex items-center gap-2 cursor-pointer w-fit group/link">
                <span className="font-medium tracking-tighter text-white uppercase leading-none text-[clamp(1.5rem,4vw,3.5rem)] font-normal group-hover/link:underline underline-offset-[8px] decoration-4">
                  GET IN TOUCH
                </span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer w-fit group/link2">
                <span className="font-medium tracking-tighter text-white uppercase leading-none text-[clamp(1.5rem,4vw,3.5rem)] font-normal group-hover/link2:underline underline-offset-[8px] decoration-4">
                  LINKEDIN
                </span>
              </a>
            </ApproachCard>

          </div>
        </div>
      </section>
    </>
  );
}

// ── ApproachCard: 클릭 토글 + 이미지 fade + 카드 flip 컴포넌트 ──
function ApproachCard({
  index, number, title, korTitle, desc,
  bgColor, imageSrc, imageAlt,
  titleColor, descColor, numberColor,
  activeCard, onCardClick, isMobile,
  children
}) {
  const isOpen = activeCard === index;

  return (
    <motion.div
      className={`relative w-full aspect-[4/5] sm:aspect-[3.5/5] ${bgColor} rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl`}
      onClick={() => onCardClick(index)}
      animate={{
        scale: isOpen ? 1.05 : 1,
        zIndex: isOpen ? 50 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* 이미지 레이어: 클릭 시 서서히 노출 (모바일은 반투명 항상 표시) */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: isMobile ? 0.35 : (isOpen ? 1 : 0) }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover scale-[1.02] border-none outline-none"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* 콘텐츠 레이어 */}
      <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col z-10">

        {/* Number */}
        <div className="flex-none">
          <motion.span
            className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-tight transition-colors duration-300 ${numberColor}`}
            animate={{ color: isOpen ? '#ffffff' : undefined }}
          >
            {number}
          </motion.span>
        </div>

        {/* ── 앞면: 제목 + 설명 (isOpen이면 사라짐) ── */}
        <motion.div
          className="flex-1 flex flex-col justify-between"
          animate={{
            opacity: isOpen ? 0 : 1,
            rotateY: isOpen ? -90 : 0,
          }}
          transition={{ duration: 0.35, ease: 'easeIn' }}
          style={{ transformOrigin: 'center', backfaceVisibility: 'hidden' }}
        >
          {/* Title */}
          <div className="flex items-center flex-1">
            <h3 className={`text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tighter ${titleColor} uppercase leading-none`} style={{ fontWeight: 900 }}>
              {title}
            </h3>
          </div>

          {/* Description */}
          <div className="flex-none flex flex-col gap-1 pb-2">
            <span className={`text-lg md:text-2xl lg:text-3xl ${descColor} font-normal tracking-tighter`}>{korTitle}</span>
            <p className={`text-lg md:text-2xl lg:text-3xl ${descColor} font-normal tracking-tighter break-keep leading-snug`}>
              {desc}
            </p>
          </div>
        </motion.div>

        {/* ── 뒷면: 열렸을 때 나타나는 콘텐츠 ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 flex flex-col gap-2 pb-8 md:pb-10 lg:pb-12"
          animate={{
            opacity: isOpen ? 1 : 0,
            rotateY: isOpen ? 0 : 90,
          }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: isOpen ? 0.2 : 0 }}
          style={{ transformOrigin: 'center', backfaceVisibility: 'hidden' }}
        >
          {children}
        </motion.div>
      </div>

      {/* 클릭 힌트 (닫혀 있을 때만 표시) */}
      <AnimatePresence>
        {!isOpen && !isMobile && (
          <motion.div
            className="absolute bottom-4 right-5 z-20 text-[10px] uppercase tracking-widest font-bold opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            style={{ color: index === 0 ? '#121212' : '#fff' }}
          >
            Click
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function RollingSkills({ skills, color }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="relative h-6 md:h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className={`${color} text-lg md:text-xl font-medium tracking-tight whitespace-nowrap`}
        >
          {skills[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default Home;
