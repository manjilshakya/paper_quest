"use client";

import HomeNavbar from "../components/homeNavbar";

const UserLayout = ({ children }: any) => {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
    </>
  );
};

export default UserLayout;
