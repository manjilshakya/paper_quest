"use client";

import React, { Suspense } from "react";
import SuccessComponent from "./components/SuccessComponent";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading payment success page</h1>}>
        <SuccessComponent />
      </Suspense>
    </div>
  );
};

export default Page;
