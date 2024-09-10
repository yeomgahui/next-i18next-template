// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import i18nConfig, { Locale } from "./app/i18n/i18nConfig"; // i18nConfig 파일 import

export function middleware(request: NextRequest) {
  // 현재 URL 경로
  const { pathname } = request.nextUrl;

  // 이미 언어가 경로에 포함된 경우
  if (i18nConfig.locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // 쿠키에서 선호하는 언어를 가져옴
  const preferredLocale = request.cookies.get("preferredLocale")?.value;

  // 브라우저 언어를 감지 (쿠키에 값이 없을 때만 사용)
  const browserLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .slice(0, 2);

  // 타입 가드를 통해 Locale 타입으로 변환
  const isLocale = (lang: string | undefined): lang is Locale =>
    lang !== undefined && i18nConfig.locales.includes(lang as Locale);

  // 쿠키 언어 > 브라우저 언어 > 기본 언어 순으로 결정
  const locale: Locale = isLocale(preferredLocale)
    ? preferredLocale
    : isLocale(browserLanguage)
    ? (browserLanguage as Locale)
    : i18nConfig.defaultLocale;

  // 언어에 맞는 경로로 리디렉션
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|static|.*\\..*|favicon.ico).*)"],
};
