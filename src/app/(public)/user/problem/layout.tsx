"use client";

import HomeNavbar from "../components/homeNavbar";

const ProblemLayout = ({ children }: any) => {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
    </>
  );
};

export default ProblemLayout;
