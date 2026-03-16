import React from 'react';
import { ProjectLayout, ProjectHeroExact, ProjectFullMedia, ProjectHighlight } from '../components/ProjectLayout';

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
            {/* 01 - 메인 제목과 오버뷰 내용이 적혀있음 (OVERVIEW, SCOPE) */}
            <ProjectHeroExact
                title="TALKAK 랜덤 사진전송 서비스"
                subtitle="심플한 랜덤 사진 공유 소셜 서비스"
                metaItems={[
                    { label: "OVERVIEW", value: "'찍고, 보내고, 받는다'는 3단계의 핵심 행동에만 집중하여, 복잡한 기능 없이 전 세계 사람들과 가볍고 유쾌하게 일상을 공유할 수 있습니다." },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "약 6개월"] }
                ]}
            />

            {/* 02 - 전체 화면을 채우는 풀사이즈 메인 이미지 영역 */}
            <ProjectFullMedia src="https://images.unsplash.com/photo-1516245834210-c4c142718e24?q=80&w=2669&auto=format&fit=crop" />

            {/* 03 - 화면 전체 너비로 배색된 큰 텍스트 강조(Highlight) 영역 */}
            <ProjectHighlight text="Share your moments instantly." bgColor="bg-[#F26027]" />
        </ProjectLayout>
    );
}

export default Project06;
