import { Button, Input } from "antd";
import Image from "next/image";
import React from "react";
import banner from "../../../../../../public/image/banner.jpg";

const CustomerHome = () => {
  return (
    <div className="px-6 lg:px-0 md:flex">
      <div className="w-full md:w-[50%] md:flex justify-center items-center py-4 md:py-[96px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-[50px] md:leading-[72px]">
            Reserve your {<br />}moment of flavor
          </h1>
          <p className="text-xl text-[#475467] font-normal text-left">
            Your table is ready for memories.
          </p>
        </div>
      </div>
      <div className="md:w-[60%] xl:w-[50%] hidden md:block">
        <Image
          src={banner}
          width={0}
          height={0}
          alt="image"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default CustomerHome;
