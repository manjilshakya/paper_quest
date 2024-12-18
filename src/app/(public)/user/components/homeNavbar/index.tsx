"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../../public/image/pq.png";

const HomeNavbar = () => {
  const router = useRouter();
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between px-6 md:px-20 py-5 bg-[#FCFCFD] drop-shadow-sm">
        <div className="flex gap-[100px] items-center">
          <Image
            src={logo}
            alt="logo"
            width={185}
            height={42}
            className="cursor-pointer"
            onClick={() => router.push("/home")}
          />

          <div className="hidden md:block">
            <ul className="flex gap-10 items-center">
              <li>
                <a href="/user">Home</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex  gap-4 items-center">
          <Link href="/user/subject" className="mr-11">
            <Button type="primary" className="cursor-pointer min-h-[38px]">
              Learn
            </Button>
          </Link>
          <div className="flex justify-center items-center rounded-full bg-[#F2F4F7] w-[48px] h-[48px] cursor-pointer relative"></div>

          <Link href="/user/login">
            <Button type="primary" className="cursor-pointer min-h-[38px]">
              Logout
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex gap-3 items-center">
          <MenuUnfoldOutlined
            className="text-xl cursor-pointer"
            // onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
