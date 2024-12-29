import { Button } from "antd";
import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: any) => {
  return (
    <div>
      <div className="w-[300px] flex flex-col gap-1  rounded-lg p-4 bg-gradient-to-br from-purple-800 via-purple-900 to-black">
        <p className="text-white font-semibold text-[24px]">{title}</p>
        <span className="text-white">{description}</span>
        <Button className="w-fit">Start Learning</Button>
      </div>
    </div>
  );
};

export default Card;
