import Image from "next/image";
import React from "react";
import david from "@/../public/image/david.jpg";
import { useRouter } from "next/navigation";
import {LearningDeck} from "@/app/Models/Types";
import useTokenStore, {useLearningCardStore, usePastPaperStore, useUserDetails} from "@/app/tokenstore";
import axios from "axios";

const Card : React.FC<LearningDeck> = ({ pastPaperId, title, totalquestions }) => {
  const router = useRouter();

  const token = useTokenStore((state) => state.token);
  const userId = useUserDetails((state) => state.userId);
  const setLearningCards = useLearningCardStore((state) => state.setCards);

  const handleCardClick = async () => {
    try {
      const {data} = await axios.get(`http://localhost:5030/api/spaced-repetition/ShowQuestionAnswer/${pastPaperId}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setLearningCards(data);

      const pastPaper = useLearningCardStore.getState();
      if (pastPaper) {
        router.push("/user/subject");
      }
    } catch (err: any) {
      console.error(err);
    }
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
