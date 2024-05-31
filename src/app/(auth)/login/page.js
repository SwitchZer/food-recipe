"use client";
import { Button, InputField } from "@/components";
import Link from "next/link";
import React, { useState } from "react";
import { login } from "@/service/client/auth";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(form);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <section className="flex flex-col gap-5 justify-between h-screen bg-white">
      <article className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-lg font-bold text-white min-h-[1587px] max-md:flex max-md:px-5 max-md:max-w-full max-sm:hidden">
            <img src="/Rectangle 324.png" className="w-full h-full" alt="" />
            <img
              src="/Mask Group.png"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />

            <div className="flex absolute flex-col items-center my-auto max-w-full w-[182px] max-md:mt-10">
              <img
                src="/Group 697.png"
                alt=""
                className="w-full aspect-square"
              />
            </div>
          </div>
        </aside>
        <main className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 my-auto text-base font-medium text-gray-500 max-md:max-w-full max-sm:flex max-sm:flex-col max-sm:my-auto">
            <h1 className="self-center text-3xl font-bold text-yellow-400 max-md:max-w-full">
              Welcome
            </h1>
            <p className="mx-6 mt-9 text-lg leading-7 text-center text-slate-400 max-md:mr-2.5 max-md:max-w-full">
              Log in into your exiting account
            </p>
            <hr className="shrink-0 mt-9 h-px border border-solid bg-neutral-100 border-neutral-100 max-md:max-w-full" />
            <form>
              <label htmlFor="email" className="block mt-7">
                Email
              </label>
              <InputField
                name="email"
                label="Email address"
                type="email"
                onChange={handleChange}
                placeholder="Enter email address"
                className="border-slate-400 text-slate-400 w-full"
              />

              <label htmlFor="password" className="block mt-7">
                Password
              </label>
              <InputField
                name="password"
                label="Create New Password"
                type="password"
                onChange={handleChange}
                placeholder="Create New Password"
                className="border-slate-400 text-slate-400 w-full"
              />

              <div className="flex gap-3.5 mt-6 max-md:flex-wrap">
                <label
                  htmlFor="terms"
                  className="flex-auto my-auto max-md:max-w-full"
                >
                  <input type="checkbox" id="terms" name="terms" /> I agree to
                  terms & conditions
                </label>
              </div>
              <Button
                onClick={handleSubmit}
                name="Log In"
                type="submit"
                className="justify-center items-center px-16 py-6 mt-10 w-full text-center text-white bg-yellow-400 rounded-md max-md:px-5 max-md:max-w-full"
              />
            </form>
            <p class="self-center mt-7 text-sm max-md:max-w-full">
              Don’t have an account?{" "}
              <Link href="/register" className="text-yellow-500">
                Sign Up
              </Link>
            </p>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Page;
