import "./reset.css";
import "./global.css";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Kim Dayoung",
  description: "안녕하세요! 프론트엔드 개발자 김다영입니다:)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
