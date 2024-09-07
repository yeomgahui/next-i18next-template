import React from "react";
import Link from "next/link";

interface NavProps {
  className?: string;
}

const Nav = ({ className }: NavProps) => {
  return (
    <nav>
      <ul className={`flex space-x-4 ${className}`}>
        <li>
          <Link
            href="/"
            className="text-white-500 hover:text-blue-700 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/page2"
            className="text-white-500 hover:text-blue-700 transition"
          >
            Page2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
