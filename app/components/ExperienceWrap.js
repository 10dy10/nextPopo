import styles from "../page.module.css";

export default function ExperienceWrap() {
  return (
    <div className={styles.experienceWrap} id="experienceW">
      <h3>EXPERIENCE</h3>
      <p>CAREER & EDUCATIONS & ACTIVITY</p>
      <ul>
        <li className={styles.careerWrap}>
          <div>
            <div>
              <h4>웰그램</h4>
              <p>프론트엔드 개발자</p>
              <p>2023.02 ~ 2024.08</p>
            </div>
            <ul>
              <li>- 보답 웹, 앱 메인,서브 페이지 프론트 개발, 유지보수</li>
              <li>- 보답 어드민 페이지 프론트 개발, 유지보수</li>
              <li>- Jquery를 사용한 레거시코드 Vanilla Js로 리팩토링</li>
              <li>
                - 디자이너, 기획자, 백엔드 개발자와 협업하여 웹, 앱 내 개선사항
                수정
              </li>
              <li>- 개발 요구사항 반영 및 Rest API 연동</li>
              <li>- 웰그램 자사 홈페이지 유지보수</li>
              <li>- 웰그램 자사 홈페이지 레거시 코드 React로 리팩토링</li>
              <li>- 디자인시스템 적용</li>
              <li>
                <a href="https://bodab.ai/" target="_blank">
                  보답
                </a>
                <a href="https://www.welgram.com/" target="_blank">
                  웰그램
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.careerWrap}>
          <div>
            <div>
              <h4>프리랜서</h4>
              <p>퍼블리셔</p>
              <p>2022.10 ~ 2023.01</p>
            </div>
            <ul>
              <li>- 펫글 팝업 창 반응형 퍼블리싱(퍼블리싱 참여도 100%)</li>
              <li>
                - 이한건설 서브페이지 반응형 퍼블리싱(퍼블리싱 참여도 100%)
              </li>
              <li>
                - 대한환경공학회 웹 리뉴얼 반응형 퍼블리싱(퍼블리싱 참여도 100%)
              </li>
              <li>- 우리아이치과 웹 퍼블리싱(퍼블리싱 참여도 100%)</li>
            </ul>
          </div>
        </li>
        <li className={styles.careerWrap}>
          <div>
            <div>
              <h4>에이블시스템</h4>
              <p>퍼블리셔</p>
              <p>2021.12 ~ 2022.12</p>
            </div>
            <ul>
              <li>
                - 삼일시스템 웹 리뉴얼 반응형 퍼블리싱(퍼블리싱 참여도 100%)
              </li>
              <li>
                - 플러스페이 웹 리뉴얼 반응형 퍼블리싱(퍼블리싱 참여도 100%)
              </li>
              <li>
                - 스낵마루 웹 서브페이지 반응형 퍼블리싱(퍼블리싱 참여도 100%)
              </li>
              <li>
                - 벤허리서치 웹 구축 반응형 퍼블리싱(퍼블리싱 참여도 100%)
              </li>
              <li>
                <span>
                  * 퍼블리싱 작업에 참여한 홈페이지는 지원을 종료했거나,
                  배포되지 않은 사이트일 수 있습니다.
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.careerWrap}>
          <div>
            <div>
              <h4>연희직업전문학교</h4>
              <p>2021.06 ~ 2021.11</p>
            </div>
            <ul>
              <li>- 웹디자인/웹퍼블리셔 과정 수료</li>
            </ul>
          </div>
        </li>
        <li className={styles.careerWrap}>
          <div>
            <div>
              <h4>
                <span>*비개발</span> CGV 매니저, 미소지기 2013.06 ~ 2021.05
              </h4>
            </div>
          </div>
        </li>
      </ul>
      <h3>PROJECT</h3>
      <ul>
        <li className={styles.careerWrap}>
          <div>
            <div>
              <h4>북마크 저장소</h4>
            </div>
            <ul>
              <li>
                - React, Typescript, Tailwindcss, firebase를 사용하여 북마크
                저장 서비스 구현
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://bookmark-project-delta.vercel.app/"
                >
                  💌 링크
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
