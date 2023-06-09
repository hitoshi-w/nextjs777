"use client";

import { AiFillGithub } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { Modal } from "@/components/modals/Modal";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/inputs/input";
import { Button } from "@/components/modals/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const postData = async (data: FieldValues) => {
  return await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    postData(data)
      .then(() => {
        // 失敗時は、同じページへリダイレクトさせる
        signIn("credentials", {
          ...data,
          redirect: false,
        }).then((callback) => {
          setIsLoading(false);

          if (callback?.ok) {
            // サーバーからデータをフェッチしなおす
            router.refresh();
            registerModal.onClose()
          }

          if (callback?.error) {
            console.log(callback.error);
          }
        });
      })
      .catch((error) => console.log(error))
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      /> */}

      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flext flext-row items-center gap-2">
          <div>
            <div>Already have an account?</div>
          </div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={registerModal.onClose}
          >
            <div>Log in</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
