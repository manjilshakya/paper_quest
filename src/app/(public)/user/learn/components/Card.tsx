import Image from "next/image";
import React from "react";
import david from "@/../public/image/david.jpg";
import { useRouter } from "next/navigation";
import {LearningDeck} from "@/app/Models/Types";

const Card : React.FC<LearningDeck> = ({ pastPaperId, title, totalquestions }) => {
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
          <input type="hidden" value={pastPaperId}/>
          <span className="text-[#c350ce]">{title}</span>
          <p className="text-[#383A42] text-[28px]">Total Questions: {totalquestions}</p>
          <span className="text-[17px] text-[#383A42]">
            Do Your Best 🐱‍💻.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
