"use client";
import { Button } from "antd";
import logo from "../../../../../../public/image/pq.png";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <div className="flex h-[96px] items-center justify-between px-10">
          <div className="flex-shrink-0 font-bold">
            <Image src={logo} alt={"logo"} height={40} />
          </div>
          <div className="flex-grow flex justify-center">
            <ul className="flex gap-10 text-[18px] font-medium">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                {" "}
                <Link href="#explore">Explore</Link>
              </li>
              <li>
                {" "}
                <Link href="#services">Services</Link>
              </li>
              <li>
                {" "}
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <Link href={"/user/Signin"}>Login</Link>
            <Button>
              <Link href={"/user/Signup"}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="xl:hidden flex items-center justify-between px-4 py-3 bg-white shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0 font-bold">
          <Image src={logo} alt={"logo"} height={30} />
        </div>

        {/* Hamburger Icon */}
        <div>
          {isOpen ? (
            <CloseOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <MenuOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6">
          {/* Close Icon */}
          <div className="flex justify-between items-center mb-6">
            <Image src={logo} alt={"logo"} height={30} />
            <CloseOutlined
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#explore">Explore</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <Link href={"/user/Signin"}>
              <Button className="w-full">Login</Button>
            </Link>
            <Link href={"/user/Signup"}>
              <Button type="primary" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
