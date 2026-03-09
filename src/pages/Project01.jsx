import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSplit, ProjectFullMedia, ProjectHighlight, ProjectTreeChart } from '../components/ProjectLayout';

import imgM01 from '../images/project1-m01.webp';
import imgM02 from '../images/project1-m02.webp';

function Project01() {
    return (
        <ProjectLayout nextProjectLink="/project/2" nextProjectTitle="SAGL" nextProjectBg="bg-[#1D112A]">

            <ProjectHeroExact
                title="골프장 통합 ERP 솔루션"
                subtitle="골프장 관리의 새로운 기준, 골프장 모든 프로세스를 한번에!"
                metaItems={[
                    {
                        label: "OVERVIEW",
                        value: "골퍼의 입장부터 결제·퇴장까지 모든 서비스를 제공하는 프론트 솔루션과, 회원·매출·코스 관리 등 골프장 운영 전반을 지원하는 B2B 백오피스를 하나로 통합한 ERP 시스템"
                    },
                    {
                        label: "SCOPE",
                        value: [
                            "UX설계",
                            "Design System 구축",
                            "UI화면설계",
                            "2023.03~2025.05"
                        ]
                    },
                    {
                        label: "RESULTS",
                        value: [
                            <span>
                                <strong>도입 현황</strong><br />
                                국내 500여 개 골프장 중 스마트스코어 태블릿·관제시스템이 도입된 350여 개 골프장을 중심으로 ERP 시스템을 순차 전환 중. <br />
                                <span style={{ color: '#9A9BA5' }}>2025년 킹즈락 컨트리클럽을 시작으로 연내 국내 30여 곳·해외 20여 곳 도입 예정</span>
                            </span>,
                            <span>
                                <strong>기술 방향성</strong><br />
                                CS의 구조적 한계를 걷어내고 웹(Web)기반으로 전면 재설계 유형·규모·국가를 가리지 않는 확장성을 핵심 원칙으로 모듈 단위 고도화 진행 중
                            </span>,
                            <span>
                                <strong>UX 핵심 성과</strong><br />
                                수십 개의 모듈, 수백 개의 기능. 그러나 사용자는 아무것도 배우지 않아도 되는 구조로 설계 <br /> <span style={{ backgroundColor: '#F2F7FE', color: '#457FF3', padding: '0 4px', borderRadius: '4px' }}>어떤 페이지에 진입하든 다음 행동이 보이는 일관된 UX 원칙 적용</span>하여 CS 환경에 익숙한 현장 사용자의 학습 시간 단축 및 업무 효율 향상에 기여
                            </span>
                        ]
                    }
                ]}
            />

            <ProjectFullMedia
                src={imgM01}
            />

            <ProjectFullMedia
                src={imgM02}
            />

            <ProjectGrid
                images={[
                    imgM02,
                    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
                ]}
            />

            <ProjectSplit
                title="A frictionless path to care."
                text={[
                    "When users arrive seeking help, the last thing they need is a convoluted booking process. We streamlined the onboarding, cutting unnecessary steps and grouping information logically.",
                    "The result is a calm, guided experience that reassures patients that they are in safe hands, even before their session begins."
                ]}
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            />

        </ProjectLayout>
    );
}

export default Project01;
