"use client";

import { Suspense } from "react";
import loader from "../../../../public/image/loader.gif";
import Image from "next/image";

const UserLayout = ({ children }: any) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Image src={loader} alt={""} height={80} />
          </div>
        }
      >
        <main>{children}</main>
      </Suspense>
    </>
  );
};

export default UserLayout;
