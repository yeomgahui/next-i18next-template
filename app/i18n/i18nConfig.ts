// 지원하는 언어 코드 타입 정의
type Locale = "en" | "fr" | "th"; // 지원하는 언어 코드 목록

// 설정 타입 정의
interface I18nConfig {
  locales: Locale[]; // 지원하는 언어 목록
  defaultLocale: Locale; // 기본 언어 설정
}

// 설정 객체
const i18nConfig: I18nConfig = {
  locales: ["en", "fr", "th"], // Locale 타입만 허용됨
  defaultLocale: "en",
};

export default i18nConfig;
