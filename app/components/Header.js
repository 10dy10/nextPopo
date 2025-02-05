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
          <Link href="/">
            <button>ABOUT</button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>SKILLS</button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button>EXPERIENCE</button>
          </Link>
        </li>
      </ul>
    </header>
  );
}
