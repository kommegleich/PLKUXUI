import { ProjectLayout, ProjectHeroExact, ProjectGrid, ProjectSectionText } from '../components/ProjectLayout';

import imgM01 from '../images/project2-m01.webp';
import imgM02 from '../images/project2-m02.webp';
import imgM03 from '../images/project2-m03.webp';
import imgFC from '../images/project2-fc.webp';
import imgFC2 from '../images/project2-fc2.webp';

function Project02() {
    return (
        <ProjectLayout
            nextProjectLink="/project/3"
            nextProjectTitle="스코어를 게이밍하다"
            nextProjectBg="bg-gradient-to-r from-[#00FF37] to-[#FF00FB]"
            nextProjectDesc="단순한 점수 기록을 넘어 방대한 스코어 데이터를 기반으로 유저의 플레이 패턴을 분석하고 감성적인 스토리로 풀어낸, \n스마트스코어 프리미엄 멤버십 전용 초개인화 리포트 서비스"
            bgColor="bg-gradient-to-b from-[#10182B] to-[#030303]"
            textColor="text-white"
        >
            {/* 01 - 메인 제목과 오버뷰, 성과 지표(RESULTS) 내용이 적혀있음 */}
            <ProjectHeroExact
                title="ARMATURE GOLF LEAGUE (SAGL)"
                subtitle="앱에서 참가 가능한 아마추어 골프리그"
                metaItems={[
                    { label: "Goal", value: "누구나 손 쉽게 참가할 수 있는 아마추어 골프 대회" },
                    { label: "SCOPE", value: ["UX 설계", "UI 화면설계", "2023.01~2023.03"] },
                    {
                        label: "RESULTS",
                        value: [
                            <span>
                                <strong>신규 선수 등록률 개선</strong><br />
                                복잡한 불필요 필드를 제거하고 단계별 시각적 피드백을 강화하여, 기존 대비 중도 이탈률 35% 감소 및 최종 등록 완료율 20% 향상
                            </span>,
                            <span>
                                <strong>참가 신청 프로세스 최적화</strong><br />
                                대회 조회부터 결제까지 이어지는 동선을 단일 흐름으로 재설계하여 사용자 평균 체류 시간 및 태스크 완수 시간 대폭 단축
                            </span>,
                            <span>
                                <strong>사용성 만족도 확보</strong><br />
                                연령대가 높은 아마추어 골퍼들도 별도의 가이드 없이 직관적으로 이용 가능한 UI 컴포넌트 구성을 통해 고객센터 문의 및 불만 접수 건수 감소
                            </span>
                        ]
                    }
                ]}
                textColor="text-white"
                subtitleColor="text-white/60"
                labelColor="text-white/40"
            />

            {/* 02 - 나란히 배치되는 2장의 모바일/포스터 이미지 영역 (여백 없음) */}
            <ProjectGrid
                images={[
                    imgM01,
                    imgFC
                ]}
                fits={[
                    'object-cover',
                    'object-cover'
                ]}
                aspect="aspect-square"
                rounded="rounded-[40px]"
                bgColor="bg-transparent"
                gap="gap-0"
                itemBg="bg-transparent"
            />

            {/* 03 - 플로우차트 이미지 */}
            <section className="w-full py-16 md:py-24 px-5 md:px-8 lg:px-16 flex flex-col items-center bg-[#111622] overflow-hidden">
                <div className="w-full max-w-[1400px] mb-10 md:mb-16 flex flex-col gap-6 items-center md:items-start select-none">
                    <div className="px-5 py-1.5 border border-white text-[#111622] text-[11px] md:text-sm font-bold uppercase tracking-widest bg-white rounded-[4px]">
                        Flowchart
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[clamp(1.3rem,3vw,2.5rem)] font-medium text-white tracking-[-0.04em] text-center md:text-left break-keep">
                            참가 신청 프로세스 최적화 및 사용자 여정 설계
                        </h2>
                        <p className="text-[13px] md:text-base text-[#9A9BA5] font-normal leading-[1.7] text-center md:text-left opacity-90 break-keep">
                            사용자가 대회를 검색하고 조회하는 시점부터 최종 선수 등록이 완료되는 시점까지의 전체 여정을 설계했습니다.<br />
                            복잡한 신청 단계를 최소화하고, 골퍼들에게 익숙한 예약 플로우를 적용하여 직관적이고 끊김 없는 사용자 경험을 구축했습니다.
                        </p>
                    </div>
                </div>
                <img
                    src={imgFC2}
                    alt="참가 신청 프로세스 플로우차트"
                    className="w-full max-w-[1400px] object-contain mx-auto"
                />
            </section>

            {/* 04 - 텍스트 단락으로 구성된 섹션 (기획/개선 주안점 등 설명) */}
            <ProjectSectionText
                title="간편한 선수등록 프로세스 UX"
                text={[
                    <span>
                        <strong className="block text-white mb-2">진입 장벽 분석</strong>
                        인증 절차를 포함한 기존의 복잡하고 까다로운 신청 단계가 아마추어 골퍼들의 중도 이탈과 저조한 대회 참여율의 핵심 원인임을 파악했습니다.
                    </span>,
                    <span>
                        <strong className="block text-white mb-2">프로세스 개선</strong>
                        '대회 신청도 예약처럼 쉽게'라는 컨셉 하에, 불필요한 군더더기 단계를 과감히 삭제하고 익숙한 골프장 예약 시스템의 UX 패턴을 적용하여 사용성을 극대화했습니다.
                    </span>,
                    <span>
                        <strong className="block text-white mb-2">참여 유도 및 성과</strong>
                        인증 과정을 사용자 흐름에 맞게 재배치하고 허들을 낮추는 전략적 UX 설계를 통해, 사용자의 심리적 부담을 줄이고 실질적인 대회 참가율 상승을 견인했습니다.
                    </span>
                ]}
                bgColor="bg-transparent"
                textColor="text-white"
                descColor="text-[#9A9BA5]"
            />

            {/* 05 - 나란히 배치되는 2장의 목업(Mockup) 테두리 없는 이미지 영역 */}
            <ProjectGrid
                images={[
                    imgM03,
                    imgM02
                ]}
                fits={[
                    'object-contain',
                    'object-contain'
                ]}
                aspect="aspect-square"
                rounded="rounded-[40px]"
                bgColor="bg-transparent"
                gap="gap-0"
                itemBg="bg-transparent"
            />
        </ProjectLayout>
    );
}

export default Project02;
