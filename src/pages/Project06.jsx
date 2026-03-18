import React from 'react';
import { ProjectLayout, ProjectHeroExact } from '../components/ProjectLayout';

import imgBg1 from '../images/project6-bg1.webp';
import imgBg2 from '../images/project6-bg2.webp';
import imgFc  from '../images/project6-fc.webp';
import imgLg1 from '../images/project6-lg1.webp';
import imgM1  from '../images/project6-m1.webp';
import imgT   from '../images/project6-t.webp';

function Project06() {
    return (
        <ProjectLayout
            nextProjectLink="/project/1"
            nextProjectTitle="골프장 통합관리 시스템"
            nextProjectBg="bg-gradient-to-r from-[#457FF3] to-[#10182B]"
            nextProjectDesc="골퍼의 입장부터 결제, 퇴장까지의 전 과정을 아우르며,\n파편화된 기존 관리 시스템의 UI를 표준화하여 실무자의 업무 효율을 극대화한 골프장 B2B 통합 ERP 시스템 설계 프로젝트"
            bgColor="bg-[#F26027]"
            textColor="text-white"
        >
            {/* A - HeroExact */}
            <ProjectHeroExact
                title="세상 사람들은 뭘하며 살까?"
                subtitle="심플한 랜덤 사진 공유 소셜 서비스"
                bgImage={imgM1}
                isFullHeight={true}
                dimOverlay={true}
                overlayClass="bg-gradient-to-r from-black/75 via-black/50 to-black/20"
                textColor="text-white"
                subtitleColor="text-white/80"
                labelColor="text-white/60"
                metaItems={[
                    { label: "OVERVIEW", value: "'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, 복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 6개월"] }
                ]}
            />

            {/* D - 개요 + 로고 시스템 split 섹션 */}
            <section className="w-full flex flex-col md:flex-row">
                {/* 좌측: 흰 배경 */}
                <div className="flex-1 min-h-[400px] bg-white px-8 md:px-16 py-16 md:py-24 flex flex-col gap-10">
                    {/* OVERVIEW */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">Overview</p>
                        <p className="text-[13px] md:text-sm text-[#222] leading-relaxed">
                            "세상 사람들은 뭘 하며 살까?" 라는 질문에서 시작하게 된 심플한 랜덤 사진공유 서비스.<br />
                            찍고싶은 순간을 포착 전송하면 전세계 어딘가 날아가는 내 사진.<br />
                            그리고 받게되는 세계 어디선가 날아오는 한 장의 사진.<br />
                            조금은 지루할 수 있는 일상에 작은 재미를 더하다
                        </p>
                    </div>

                    {/* KEYWORD */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">Keyword</p>
                        <div className="flex flex-wrap gap-2">
                            {['SIMPLE', 'FOCUS', 'NO STRESS'].map(kw => (
                                <span key={kw} className="px-4 py-1.5 border border-[#121212] text-[#121212] text-[11px] font-bold uppercase tracking-wider">
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* COLOR */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">Color</p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { bg: '#FF713C', border: false, label: '#FF713C' },
                                { bg: '#121212', border: false, label: '#121212' },
                                { bg: '#FFFFFF', border: true,  label: '#FFFFFF' },
                            ].map(({ bg, border, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <div
                                        className="w-10 h-10 rounded-sm flex-shrink-0"
                                        style={{ backgroundColor: bg, border: border ? '1px solid #121212' : 'none' }}
                                    />
                                    <span className="text-[11px] font-mono text-[#222]">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 우측: 오렌지 배경 - Logo System */}
                <div className="flex-1 min-h-[400px] bg-[#F26027] px-8 md:px-16 py-16 md:py-24 flex flex-col gap-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Logo System</p>

                    {/* 메인 로고: 아웃라인 타이포 (코드) */}
                    <div className="py-8 flex items-center">
                        <p
                            className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tight text-transparent leading-none select-none"
                            style={{ WebkitTextStroke: '2px white' }}
                        >
                            TALKAK
                        </p>
                    </div>

                    <p className="text-[12px] md:text-sm text-white/90 leading-relaxed">
                        "탈칵" 사진 찍을때 소리에서 따온 의성어를 직선 타이포로 표현
                    </p>

                    {/* 로고 변형 2종 */}
                    <div className="flex items-center gap-6 mt-auto">
                        {/* 아웃라인 텍스트 로고 */}
                        <p
                            className="text-[1.4rem] md:text-[1.6rem] font-black tracking-tight text-transparent leading-none select-none"
                            style={{ WebkitTextStroke: '1.5px white' }}
                        >
                            TALKAK
                        </p>
                        {/* 앱 아이콘 (다크 배경 내장) */}
                        <img src={imgLg1} alt="TALKAK 앱 아이콘" className="w-[72px] md:w-[88px] object-contain rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* E - 플로우차트 섹션 */}
            <section className="relative w-full py-16 md:py-28 overflow-hidden bg-[#0d0e10]">
                <img src={imgBg2} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-10 md:mb-14">Flow Chart</p>
                    <div className="bg-white/8 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10">
                        <img src={imgFc} alt="TALKAK 플로우차트" className="w-full max-w-[900px] mx-auto object-contain" />
                    </div>
                </div>
            </section>

            {/* C - SO SIMPLE 섹션 */}
            <section className="relative w-full min-h-[50vh] flex items-center justify-center py-20 overflow-hidden">
                <img src={imgBg1} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <img src={imgT} alt="SO SIMPLE" className="relative z-10 w-[90%] md:w-[75%] max-w-[1000px] object-contain" />
            </section>
        </ProjectLayout>
    );
}

export default Project06;
