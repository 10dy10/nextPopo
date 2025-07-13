import styles from "../page.module.css";
import Image from "next/image";

export default function AboutWrap() {
  return (
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
        현재까지의 경험과 노력으로 미래에도 끊임없는 성장과 성과를 이루어 나갈
        것임을 자부합니다.
        <br />
        <br />
        유지보수가 쉬운, 좀 더 효율적인 코드를 짜기 위해 끊임없이 고민하며,
        <br />
        지속적인 배움과 성장 속에서 발전하는 프론트엔드 개발자가 되기 위해
        학습하고 있습니다.
      </div>
      <ul className={styles.aboutBox}>
        <li className={styles.imgBox}>
          <Image
            src={"/images/442aa9949.png"}
            width={200}
            height={200}
            alt="이미지"
          />
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
  );
}
