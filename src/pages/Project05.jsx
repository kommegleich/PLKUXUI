import React from 'react';
import { motion } from 'framer-motion';
import { ProjectLayout } from '../components/ProjectLayout';
import imgCharacter from '../images/project5-m1.webp';
import imgLogo from '../images/project5-m2.webp';
import imgM01 from '../images/project5-apppg1.webp';
import imgM02 from '../images/project5-apppg2.webp';
import imgM03 from '../images/project5-apppg3.webp';
import imgM04 from '../images/project5-apppg4.webp';
import imgM05 from '../images/project5-apppg5.webp';
import imgM06 from '../images/project5-apppg6.webp';
import imgM07 from '../images/project5-apppg7.webp';
import imgM08 from '../images/project5-apppg8.webp';

const phoneImages = [imgM01, imgM02, imgM03, imgM04, imgM05, imgM06, imgM07, imgM08];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 1.0, ease: 'easeOut' }
};

// ── IA Square Node ──
const NODE = 'w-[76px] h-[76px] lg:w-[90px] lg:h-[90px] flex-shrink-0 flex items-center justify-center text-center text-[10px] lg:text-[11px] font-medium leading-snug rounded-[8px] px-1 whitespace-pre-line';
const NV = {
    normal: 'bg-[#D4DFEF] text-[#263044] border border-[#B8C8E4]',
    auth:   'bg-[#C2CEDF] text-[#263044] border border-[#9AAAC8] opacity-75',
    light:  'bg-[#EBF0F8] text-[#263044] border border-[#C8D4EC]',
};
function SQ({ text, v = 'normal' }) {
    return <div className={`${NODE} ${NV[v]}`}>{text}</div>;
}
function Arr({ dir = 'right' }) {
    return (
        <span className={`flex-shrink-0 text-[#9AAAC8] font-light select-none
            ${dir === 'right' ? 'text-lg lg:text-xl mx-1 lg:mx-2 self-center' : 'text-base self-center'}`}>
            {dir === 'right' ? '→' : '↓'}
        </span>
    );
}

function Project05() {
    return (
        <ProjectLayout
            nextProjectLink="/project/6"
            nextProjectTitle="TALKAK 랜덤 사진전송 서비스"
            nextProjectBg="bg-gradient-to-r from-[#FD723B] to-[#F26027]"
            nextProjectDesc="'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, \n복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있는 심플한 랜덤 사진 공유 소셜 서비스"
            bgColor="bg-white"
            textColor="text-[#121212]"
        >
            {/* 01 - HERO */}
            <section className="w-full min-h-[100svh] bg-[#0066FF] flex flex-col justify-between overflow-hidden">
                {/* TOP: title + OVERVIEW + SCOPE (like other project pages) */}
                <div className="w-full px-5 md:px-12 lg:px-16 pt-28 md:pt-40 flex justify-center">
                    <motion.div
                        className="w-full max-w-[1400px] flex flex-col md:flex-row md:items-start gap-8 md:gap-0"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
                    >
                        {/* Left: title + subtitle */}
                        <div className="flex-1 flex flex-col gap-3">
                            <h1 className="text-white text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.1]">
                                충전결제 서비스 PAYIS
                            </h1>
                            <p className="text-white/70 text-sm md:text-base font-medium">
                                선불형 간편 결제 앱(App) 구축 프로젝트
                            </p>
                        </div>
                        {/* Right: OVERVIEW + SCOPE */}
                        <div className="flex flex-col gap-8 md:gap-10 md:w-[42%] lg:w-[38%]">
                            <div className="flex flex-col gap-2">
                                <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">Overview</span>
                                <p className="text-white/80 text-sm md:text-[15px] leading-[1.9] break-keep">
                                    간편함과 보안, 두 가지 가치를 모두 담은 새로운 결제 경험.
                                    페이이즈는 카드 등록 없이 원하는 만큼 충전해 사용하는 선불형 간편 결제 시스템입니다.
                                    실시간 충전과 사용, 개인정보 최소 수집, 인터페이스의 직관성을 핵심으로
                                    시간과 장소의 제약 없이, 누구나 쉽게 접근할 수 있는 결제 경험을 목표로 설계했습니다.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">Scope</span>
                                <div className="flex flex-col gap-1 text-white/80 text-sm md:text-[15px]">
                                    <span>UX설계</span>
                                    <span>UI화면설계</span>
                                    <span>약 6개월 (2022 앱스토어 출시완료)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CENTER: logo + character */}
                <motion.div
                    className="flex flex-col items-center justify-end flex-1 pt-10"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.2 }}
                >
                    <img src={imgLogo} alt="payis" className="w-[100px] md:w-[140px] h-auto object-contain mb-6" />
                    <img
                        src={imgCharacter}
                        alt="payis character"
                        className="w-[240px] md:w-[340px] lg:w-[420px] h-auto object-contain block"
                    />
                </motion.div>
            </section>

            {/* 02 - "기본에 충실한 앱" */}
            <section className="w-full bg-white flex flex-col items-center py-24 md:py-40 px-6 md:px-12">
                <motion.div className="flex flex-col items-center text-center" {...fadeInUp}>
                    <span className="text-[#0066FF] text-sm md:text-base font-semibold mb-4 tracking-wide">필요한 기능만 최소한으로!</span>
                    <h2 className="text-[#111] text-4xl md:text-6xl lg:text-[80px] font-bold tracking-[-0.03em]">기본에 충실한 앱</h2>
                </motion.div>
            </section>

            {/* 03 - INFORMATION ARCHITECTURE */}
            <section className="w-full bg-white flex flex-col items-center py-24 md:py-40 lg:py-56 px-4 md:px-8 lg:px-12 overflow-x-auto">
                <motion.div className="w-full max-w-[1300px]" {...fadeInUp}>
                    <h3 className="text-[#9AAAC8] text-xl md:text-3xl font-semibold text-center mb-10 md:mb-16 tracking-wide">
                        Information Architecture
                    </h3>

                    {/* ── DESKTOP ── */}
                    <div className="hidden lg:block">
                        {/* NODE size reference: 90×90px via SQ component */}

                        {/* 가입 row (상단) — offset by 메인 width + gap */}
                        <div className="flex items-center mb-1 pl-[calc(90px+24px)]">
                            <SQ text={'간편 로그인\n(생략가능)'} v="light" /><Arr />
                            <SQ text="회원" /><Arr />
                            <SQ text="권한" /><Arr />
                            <SQ text={'전화번호\n(인증 필요)'} /><Arr />
                            <SQ text="약관" /><Arr />
                            <SQ text={'이메일\n(인증 필요)'} v="auth" /><Arr />
                            <SQ text="패턴" />
                        </div>

                        {/* ↓ connector under 간편 로그인 */}
                        <div className="flex pl-[calc(90px+24px)] mb-1">
                            <div className="w-[90px] flex justify-center">
                                <Arr dir="down" />
                            </div>
                        </div>

                        {/* 메인 + 나머지 branches */}
                        <div className="flex flex-row items-stretch gap-6">
                            {/* 메인 column */}
                            <div className="flex-shrink-0 w-[90px] bg-[#263044] rounded-[10px] flex items-center justify-center py-4">
                                <span className="text-white text-[13px] font-semibold [writing-mode:vertical-rl] rotate-180 tracking-widest">메인</span>
                            </div>

                            {/* Branch rows */}
                            <div className="flex flex-col gap-3 justify-center">
                                {/* 사용 */}
                                <div className="flex items-start">
                                    <Arr /><SQ text="사용" /><Arr />
                                    <div className="flex flex-col gap-3">
                                        <SQ text="BarCode" />
                                        <SQ text="QR" />
                                    </div>
                                    <Arr /><SQ text="PIN" /><Arr />
                                    <SQ text={'사용\n이메일'} v="auth" />
                                </div>
                                {/* 충전 */}
                                <div className="flex items-center">
                                    <Arr /><SQ text="충전" /><Arr />
                                    <SQ text="카드" /><Arr />
                                    <SQ text={'이메일\n발송'} v="auth" />
                                </div>
                                {/* 사용내역 */}
                                <div className="flex items-center">
                                    <Arr /><SQ text="사용내역" />
                                </div>
                                {/* 알림/공지 */}
                                <div className="flex items-center">
                                    <Arr /><SQ text={'알림\n공지'} />
                                </div>
                                {/* 환경설정 */}
                                <div className="flex items-center">
                                    <Arr /><SQ text="환경설정" /><Arr />
                                    <SQ text="보안센터" /><Arr />
                                    <SQ text="로그아웃" /><Arr />
                                    <SQ text="회원탈퇴" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── MOBILE / TABLET ── */}
                    <div className="flex flex-col gap-3 lg:hidden">
                        {[
                            { label: '가입', nodes: ['간편 로그인 (생략가능)', '회원', '권한', '전화번호 (인증 필요)', '약관', '이메일 (인증 필요)', '패턴'] },
                            { label: '사용', nodes: ['사용', 'BarCode', 'QR', 'PIN', '사용 이메일'] },
                            { label: '충전', nodes: ['충전', '카드', '이메일 발송'] },
                            { label: '사용내역', nodes: ['사용내역'] },
                            { label: '알림/공지', nodes: ['알림/공지'] },
                            { label: '환경설정', nodes: ['환경설정', '보안센터', '로그아웃', '회원탈퇴'] },
                        ].map((row, idx) => (
                            <div key={idx} className="bg-[#F6F8FC] rounded-[12px] p-4">
                                <span className="text-[#0066FF] text-[11px] font-bold tracking-widest uppercase mb-3 block">{row.label}</span>
                                <div className="flex flex-row flex-wrap gap-2 items-center">
                                    {row.nodes.map((node, nIdx) => (
                                        <React.Fragment key={nIdx}>
                                            <span className="bg-[#D4DFEF] text-[#263044] text-[11px] font-medium px-2.5 py-1.5 rounded-[6px] border border-[#B8C8E4]">
                                                {node}
                                            </span>
                                            {nIdx < row.nodes.length - 1 && (
                                                <span className="text-[#9AAAC8] text-xs">→</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 04 - PHONE MOCKUP MARQUEE */}
            <section className="w-full bg-[#1B2035] overflow-hidden py-24 md:py-40 lg:py-56">
                <div className="relative flex overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 35, ease: 'linear' } }}
                    >
                        {[...phoneImages, ...phoneImages].map((img, idx) => (
                            <div key={idx} className="flex-shrink-0 mx-2 md:mx-4">
                                <img
                                    src={img}
                                    alt={`payis screen ${(idx % 8) + 1}`}
                                    className="h-[240px] md:h-[500px] w-auto object-contain rounded-[18px] md:rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </ProjectLayout>
    );
}

export default Project05;
