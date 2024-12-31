"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoaderSuccessComponents from "./LoaderSuccessComponents";
import sucess from "@/../public/image/success.jpg";

// amount=35&creditPoint=35
const SuccessComponent = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const creditPoint = searchParams.get("creditPoint");
  const linkURL = params?.id ? `/user/${params?.id}` : "/user";
  const [paymentLoader, setPaymentLoader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setPaymentLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {paymentLoader ? (
        <LoaderSuccessComponents />
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-[96px]">
          <Image src={sucess} alt="Payment Success " width={200} height={200} />
          <div className="text-4xl font-semibold text-[#D54545] pt-[40px] ">
            Payment successful.
          </div>

          <div className="font-normal text-xl text-[#475467] mt-6">
            Congratulation ! Your payment of{" "}
            <span className="font-semibold">${amount}</span> has been
            successfully processed.
          </div>
          {/* <div className="font-normal text-xl text-[#475467] mt-[14px]">
            You’ve also received{" "}
            <span className="font-semibold">${creditPoint} </span>additional
            credit
          </div> */}
          <Link href={linkURL}>
            <Button type="primary" className="mt-7 min-h-11">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SuccessComponent;
