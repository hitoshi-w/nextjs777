"use client";

import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="50"
      width="50"
      src="/images/logo.png"
    ></Image>
  );
};
