import React from "react";
import Nav from "@/components/molecules/Nav";
import Link from "next/link";

interface HeaderProps {
  lng?: string;
}

const Header = ({ lng }: HeaderProps) => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-xl font-bold hover:text-gray-300 transition"
        >
          I18n-Template
        </Link>
        <div className="flex items-center space-x-4">
          <Nav className="gnb" />
        </div>
      </div>
    </header>
  );
};

export default Header;
