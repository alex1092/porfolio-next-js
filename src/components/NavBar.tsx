/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

//bg-gradient-to-r from-indigo-500 via-violet-700 to-purple-900

export const NavBar = () => {
  return (
    <nav className="flex container justify-center items-center lg:gap-32 p-8">
      <Link
        className=" hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-violet-700 hover:to-purple-900 hover:bg-clip-text hover:text-transparent animate"
        href="/"
      >
        // Home
      </Link>
      <Link
        className=" hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-violet-700 hover:to-purple-900 hover:bg-clip-text hover:text-transparent animate"
        href="/projects"
      >
        // Projects
      </Link>
      <Link
        className=" hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-violet-700 hover:to-purple-900 hover:bg-clip-text hover:text-transparent animate"
        href="/info"
      >
        // Info
      </Link>
      <Link
        className=" hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-violet-700 hover:to-purple-900 hover:bg-clip-text hover:text-transparent animate"
        href="/contact"
      >
        // Contact
      </Link>
      <ModeToggle />
    </nav>
  );
};
