"use client";

import { Avatar } from "@/components/Avatar";
import { MenuItem } from "@/components/navbar/MenuItem";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface UserMenuProps {
  currentUser: User | null;
}

export const UserMenu = ({ currentUser }: UserMenuProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  // 最初にレンダリングされた時に、useCallback内の関数が生成され、それ以降は第二引数の空配列によりその関数は再生成されることはない。
  const toggleOpen = useCallback(() => {
    // set関数に関数を渡すことで、その関数の引数は前回の値を利用するようになる。
    // set関数に直接valueを渡してしまうと、最初にレンダリングされた時の結果がずっと返ってくることになる
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hiddene md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flext flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favarites" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sing up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
