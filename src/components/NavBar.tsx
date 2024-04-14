/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const NavBar = () => {
  return (
    <div>
      <div className="flex p-6 lg:hidden">
        <Drawer>
          <DrawerTrigger>Menu</DrawerTrigger>
          <DrawerContent className="flex flex-col gap-10 mx-auto align-middle justify-center">
            <Link className=" text-center" href="/">
              Home
            </Link>
            <Link className=" text-center" href="/projects">
              Projects
            </Link>
            <Link className=" text-center" href="/token-swap">
              Web3
            </Link>
            <Link className=" text-center" href="/contact">
              Contact
            </Link>
            <div className="flex justify-center mb-10">
              <ModeToggle />
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <nav className=" container hidden lg:flex justify-center items-center lg:gap-32 p-8">
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/"
        >
          // Home
        </Link>
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/projects"
        >
          // Projects
        </Link>
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/token-swap"
        >
          // Web3
        </Link>
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/contact"
        >
          // Contact
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
};
