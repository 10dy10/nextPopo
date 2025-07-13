import Image from "next/image";
import styles from "../page.module.css";

export default function SkillsWrap() {
  return (
    <div className={styles.skillsWrap} id="skillW">
      <h3>SKILLS</h3>
      <p>이런 기술들을 사용해봤습니다!</p>
      <ul>
        <li>
          <Image src={"/icons/html5.png"} width={80} height={80} alt="이미지" />
          <p>HTML</p>
        </li>
        <li>
          <Image src={"/icons/css3.png"} width={80} height={80} alt="이미지" />
          <p>CSS</p>
        </li>
        <li>
          <Image
            src={"/icons/javascript.png"}
            width={80}
            height={80}
            alt="이미지"
          />
          <p>JavaScript</p>
        </li>
        <li>
          <Image
            src={"/icons/typescript.png"}
            width={80}
            height={80}
            alt="이미지"
          />
          <p>Typescript</p>
        </li>
        <li>
          <Image
            src={"/icons/tailwind-css.png"}
            width={80}
            height={80}
            alt="이미지"
          />
          <p>Tailwindcss</p>
        </li>
        <li>
          <Image
            src={"/icons/jquery.png"}
            width={80}
            height={80}
            alt="이미지"
          />
          <p>Jquery</p>
        </li>
        <li>
          <Image src={"/icons/react.png"} width={80} height={80} alt="이미지" />
          <p>React</p>
        </li>
        <li>
          <Image
            src={"/icons/nextdotjs.png"}
            width={80}
            height={80}
            alt="이미지"
          />
          <p>Next.js</p>
        </li>
        <li>
          <Image
            src={"/icons/lottiefiles.png"}
            width={80}
            height={80}
            alt="이미지"
          />
          <p>Lottie</p>
        </li>
        <li>
          <Image src={"/icons/figma.png"} width={80} height={80} alt="이미지" />
          <p>Figma</p>
        </li>
        <li>
          <Image src={"/icons/slack.png"} width={80} height={80} alt="이미지" />
          <p>Slack</p>
        </li>
        <li>
          <Image src={"/icons/git.png"} width={80} height={80} alt="이미지" />
          <p>Git</p>
        </li>
      </ul>
    </div>
  );
}
