"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";

import lottieJson from "@/public/animation/scroll.json";
import emailJson from "@/public/animation/mail.json";
import stars from "@/public/animation/stars.json";

import EmailSend from "./components/EmailSend";
import AboutWrap from "./components/AboutWrap";
import SkillsWrap from "./components/SkillsWrap";
import ExperienceWrap from "./components/ExperienceWrap";

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

      <div className={styles.coverArea} id="aboutM">
        <AboutWrap />
        <SkillsWrap />
        <ExperienceWrap />
        <div className={styles.emailWrap} id="contact">
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
