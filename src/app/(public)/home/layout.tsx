import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import loader from "../../../../public/image/loader.gif";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Image src={loader} alt={""} height={80} />
          </div>
        }
      >
        <Navbar />
        <main>{children}</main>
      </Suspense>
    </div>
  );
};

export default Layout;
