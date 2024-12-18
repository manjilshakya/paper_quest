import { Button } from "antd";
import logo from "../../../../../../public/image/pq.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="hidden xl:block">
        <div className="flex h-[96px] items-center justify-between px-10">
          <div className="flex-shrink-0 font-bold">
            <Image src={logo} alt={"logo"} height={40} />
          </div>
          <div className="flex-grow flex justify-center">
            <ul className="flex gap-10 text-[18px] font-medium">
              <li>Home</li>
              <li>Explore</li>
              <li>Services</li>
              <li>Contact</li>
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
    </>
  );
};

export default Navbar;
