"use client";

import Image from "next/image";

interface AvaterProps {
  src: string | null | undefined;
}

export const Avatar = ({ src }: AvaterProps) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src={src || `/images/user.png`}
    ></Image>
  );
};
