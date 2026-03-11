import React from 'react';
import { motion } from 'framer-motion';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

import imgHero from '../images/project3_backef.png';
import imgM01 from '../images/project3-m01.png';

function Project03() {
    return (
        <ProjectLayout
            nextProjectLink="/project/4"
            nextProjectTitle="골프와 선물하기 연계서비스"
            nextProjectBg="bg-gradient-to-r from-[#F43DE5] to-[#9F2152]"
            nextProjectDesc="관계 기반의 리마인드 알림과 맞춤형 큐레이션을 통해 유저 간 소셜 네트워킹을 활성화하고, \n구매 프로세스를 단축해 전환율을 극대화한 골프 앱 내 커머스(선물하기) UX 전략 및 설계"
            bgColor="bg-[#010101]"
            textColor="text-white"
        >
            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE) */}
            <ProjectHeroExact
                title="스코어를 게이밍하다"
                subtitle="스마트스코어 프리미엄 멤버십 전용 서비스"
                metaItems={[
                    { label: "OVERVIEW", value: "단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, 초개인화 리포트 서비스입니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 2개월"] }
                ]}
                bgImage={imgHero}
                isFullHeight={true}
                textColor="text-white"
                subtitleColor="text-white/80"
                labelColor="text-white/50"
            />

            {/* 02 - Overlapping phones image area */}
            <section className="w-full relative z-20 flex justify-center -mt-48 md:-mt-[35vh] px-6 md:px-12 lg:px-16 pb-24 mx-auto max-w-[2000px]">
                <motion.img
                    src={imgM01}
                    alt="Phones mockups"
                    className="w-full max-w-[1800px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </section>

            {/* 03 - 화면 전체 너비로 배색된 큰 텍스트 강조(Highlight) 영역 */}
            <ProjectHighlight text="Data driven golf experience." bgColor="bg-[#010101]" textColor="text-white" />
        </ProjectLayout>
    );
}

export default Project03;
