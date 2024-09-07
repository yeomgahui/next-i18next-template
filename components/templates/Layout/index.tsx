// components/templates/Layout.tsx
import React from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

interface LayoutProps {
  children: React.ReactNode;
  lng?: string;
}

const Layout = ({ children, lng }: LayoutProps) => {
  return (
    <>
      <Header lng={lng} />
      <main className="contents">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
