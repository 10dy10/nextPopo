import Link from "next/link";

import HomeIcon from "@/public/icons/home.svg";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <button>
              <HomeIcon />
            </button>
          </Link>
        </li>
        <li>
          <Link href="/#aboutM">
            <button>ABOUT</button>
          </Link>
        </li>
        <li>
          <Link href="/#skillW">
            <button>SKILLS</button>
          </Link>
        </li>
        <li>
          <Link href="/#experienceW">
            <button>EXPERIENCE</button>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <button>CONTACT</button>
          </Link>
        </li>
      </ul>
    </header>
  );
}
