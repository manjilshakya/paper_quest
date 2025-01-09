"use client";

import HomeNavbar from "../components/homeNavbar";

const ProfileLayout = ({ children }: any) => {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
    </>
  );
};

export default ProfileLayout;
