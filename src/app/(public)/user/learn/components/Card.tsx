import Image from "next/image";
import React from "react";
import david from "@/../public/image/david.jpg";
import { useRouter } from "next/navigation";

const Card = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/user/subject");
  };
  return (
    <div>
      <div
        className="w-[364px] rounded-lg bg-white shadow-lg"
        onClick={handleCardClick}
      >
        <div>
          <Image
            src={david}
            alt={""}
            height={158}
            width={371}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-10">
          <span className="text-[#c350ce]">SEE</span>
          <p className="text-[#383A42] text-[28px]">Science</p>
          <span className="text-[17px] text-[#383A42]">
            Initiate calls with a click directly from your browser, saving time
            and enhancing productivity.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
