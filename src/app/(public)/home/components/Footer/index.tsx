"use client";
import React from "react";
import Link from "next/link";

import { footerLinks } from "./constant";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { AppstoreIcon } from "@/icons/AppstoreIcon";
import { LinkdinIcon } from "@/icons/InstagramIcon";
import { PlaystoreIcon } from "@/icons/PlaystoreIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";

const Footer = () => {
  const scrollToSection = () => {
    const section = document.getElementById("post-job-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#f0f0f0] px-[32px] lg:px-[128px] mt-[64px]">
      <div className="container pt-16 pb-12">
        <div className="flex justify-between flex-wrap lg:flex-nowrap pb-[64px]">
          <div className="w-full md:max-w-[320px]">
            <Link href="/">
              {/* <Image
                src="/images/tradiesLogo.svg"
                alt="Tradies Home"
                width={98}
                height={58}
              /> */}
              Paper Quest
            </Link>
            <p className="text-sm font-normal pt-2">
              Paper Quest is a dedicated platform designed to help you find
              solutions to your academic challenges by providing access to a
              wide collection of past papers. Whether you're preparing for exams
              or looking to review previous questions, Paper Quest is here to
              make your study journey easier and more efficient.{" "}
            </p>
            <div className="flex gap-4 items-center mt-4">
              <Link href="" target="_blank">
                <FacebookIcon />
              </Link>
              <Link href="" target="_blank">
                <LinkdinIcon />
              </Link>
              <Link href="" target="_blank">
                <TwitterIcon />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[80px] mt-8 md:mt-0">
            {footerLinks?.map(({ title, children }) => (
              <div key={title} className="flex flex-col gap-4">
                <p className="text-sm font-semibold ">{title}</p>
                <ul className="flex flex-col gap-3">
                  {children.map(({ label, url }) => (
                    <li key={title} className="text-base font-semibold ">
                      {label == "Post a job" ? (
                        <div
                          onClick={() => scrollToSection()}
                          className="cursor-pointer w-[67px] text-sm font-normal  hover:text-[#D8D8D8] hover:underline"
                        >
                          {label}
                        </div>
                      ) : (
                        <Link
                          className="text-sm font-normal  hover:text-[#D8D8D8] hover:underline"
                          href={url}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-sm font-semibold ">Mobile App</p>
              <div className="flex gap-4 items-center mt-4">
                <Link href="#">
                  <AppstoreIcon />
                </Link>
                <Link href="#">
                  <PlaystoreIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-8 flex justify-between items-center">
          <p className="text-base font-normal ">
            © 2024 Paper Quest. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/legal/terms-and-condition"
              className="text-base font-normal "
            >
              Terms & Condition
            </Link>
            <Link
              href="/legal/privacy-and-policy"
              className="text-base font-normal "
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
