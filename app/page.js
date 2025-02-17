"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";

import Image from "next/image";
import Kdy from "@/public/images/442aa9949.png";
import html from "@/public/icons/html5.png";
import css from "@/public/icons/css3.png";
import js from "@/public/icons/javascript.png";
import jq from "@/public/icons/jquery.png";
import reactIcon from "@/public/icons/react.png";
import nextIcon from "@/public/icons/nextdotjs.png";
import swiperIcon from "@/public/icons/swiper.png";
import lottieIcon from "@/public/icons/lottiefiles.png";
import axiosIcon from "@/public/icons/axios.png";
import figmaIcon from "@/public/icons/figma.png";
import gitIcon from "@/public/icons/git.png";
import slackIcon from "@/public/icons/slack.png";

import lottieJson from "@/public/animation/scroll.json";
import emailJson from "@/public/animation/mail.json";
import stars from "@/public/animation/stars.json";

import EmailSend from "./components/EmailSend";

export default function Home() {
  const Lottie = dynamic(() => import("@/app/components/LottieComponent"), {
    ssr: false,
  });

  return (
    <div className={styles.page}>
      <div className={styles.fixedArea}>
        <Lottie animationData={stars} />
        <p className={styles.textBox}>
          안녕하세요!
          <br />
          <span className={styles.developer}>FRONTEND DEVELOPER</span>
          <br />
          김다영입니다
        </p>
        <div className={styles.lottieWrap}>
          <Lottie animationData={lottieJson} />
        </div>
      </div>

      <div className={styles.coverArea}>
        <div className={styles.aboutWrap}>
          <h3>ABOUT ME</h3>
          <div className={styles.aboutMe}>
            퍼블리셔와 프론트엔드 경력을 통하여 프로젝트를 수행하면서 경력을
            쌓아왔습니다.
            <br />
            개인적인 학습도 게을리하지 않아 업무에서 사용하지 않았던 스킬도 사용
            가능합니다.
            <br />
            서비스직에서 오랜시간 근무하여 협업 업무는 자신 있습니다!
            <br />
            현재까지의 경험과 노력으로 미래에도 끊임없는 성장과 성과를 이루어
            나갈 것임을 자부합니다.
            <br />
            <br />
            유지보수가 쉬운, 좀 더 효율적인 코드를 짜기 위해 끊임없이 고민하며,
            <br />
            지속적인 배움과 성장 속에서 발전하는 프론트엔드 개발자가 되기 위해
            학습하고 있습니다.
          </div>
          <ul className={styles.aboutBox}>
            <li className={styles.imgBox}>
              <Image src={Kdy} alt="이미지" />
            </li>
            <li className={styles.aboutTxt}>
              <ul>
                <li>김다영</li>
                <li>🧡 1993.10.10</li>
                <li>💛 kdy93102@naver.com</li>
                <li>💚 인천대학교 일어일문학과</li>
                <li>💙 연희직업전문학교 웹디자인/웹퍼블리셔 과정 수료</li>
                <li>💜 ESTJ</li>
                <li>
                  🤎
                  <a href="https://github.com/10dy10" target="__blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.skillsWrap}>
          <h3>SKILLS</h3>
          <p>이런 기술들을 사용해봤습니다!</p>
          <ul>
            <li>
              <Image src={html} alt="이미지" />
              <p>HTML</p>
            </li>
            <li>
              <Image src={css} alt="이미지" />
              <p>CSS</p>
            </li>
            <li>
              <Image src={js} alt="이미지" />
              <p>JavaScript</p>
            </li>
            <li>
              <Image src={jq} alt="이미지" />
              <p>Jquery</p>
            </li>
            <li>
              <Image src={reactIcon} alt="이미지" />
              <p>React</p>
            </li>
            <li>
              <Image src={nextIcon} alt="이미지" />
              <p>Next.js</p>
            </li>
            <li>
              <Image src={swiperIcon} alt="이미지" />
              <p>Swiper</p>
            </li>
            <li>
              <Image src={lottieIcon} alt="이미지" />
              <p>Lottie</p>
            </li>
            <li>
              <Image src={axiosIcon} alt="이미지" />
              <p>Axios</p>
            </li>
            <li>
              <Image src={figmaIcon} alt="이미지" />
              <p>Figma</p>
            </li>
            <li>
              <Image src={slackIcon} alt="이미지" />
              <p>Slack</p>
            </li>
            <li>
              <Image src={gitIcon} alt="이미지" />
              <p>Git</p>
            </li>
          </ul>
        </div>
        <div className={styles.experienceWrap}>
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
                  <li>- 보답 웹, 앱 메인,서브 페이지 프론트 개발</li>
                  <li>- 보답 어드민 페이지 프론트 개발</li>
                  <li>- Jquery를 사용한 레거시코드 Vanilla Js로 리팩토링</li>
                  <li>
                    - 디자이너, 기획자, 백엔드 개발자와 협업하여 웹, 앱 내
                    개선사항 수정
                  </li>
                  <li>- REST API연동하여 보험 목록 호출 개발</li>
                  <li>- 웰그램 자사 홈페이지 유지보수</li>
                  <li>- 웰그램 자사 홈페이지 레거시 코드 React로 리팩토링</li>
                  <li>- 디자인시스템 적용</li>
                  <li>
                    <a href="https://bodab.ai/" target="_blank">
                      🎈보답
                    </a>
                    <a href="https://www.welgram.com/" target="_blank">
                      🎈웰그램
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
                    - 대한환경공학회 웹 리뉴얼 반응형 퍼블리싱(퍼블리싱 참여도
                    100%)
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
                    - 스낵마루 웹 서브페이지 반응형 퍼블리싱(퍼블리싱 참여도
                    100%)
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
        </div>
        <div className={styles.emailWrap}>
          <p>
            감사합니다!
            <br />
            궁금한 점이 있다면 연락주세요
          </p>
          <Lottie animationData={emailJson} />
          <EmailSend />
        </div>
        <footer>
          <p className="txtBox">
            Copyright 2025. kimdayoung all rights reserved. <br />
            Next.js 기반으로 제작된 포트폴리오입니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
