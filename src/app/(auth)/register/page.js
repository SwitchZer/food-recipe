"use client";
import { Button, InputField } from "@/components";
import { register } from "@/service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      if (!form.email || !form.password) {
        alert("Please fill in all the required fields.");
        return;
      }
      e.preventDefault();
      await register(form);
      alert("Registration successful! Redirecting to login...");
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className="flex flex-col gap-5 justify-between h-screen bg-white">
      <article className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-lg font-bold text-white min-h-[1587px] max-md:flex max-md:px-5 max-md:max-w-full max-sm:hidden">
            <img
              src="/Rectangle 324.png"
              className="size-full absolute"
              alt=""
            />
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
              Let’s Get Started !
            </h1>
            <p className="mx-6 mt-9 text-lg leading-7 text-center text-slate-400 max-md:mr-2.5 max-md:max-w-full">
              Create new account to access all features
            </p>
            <hr className="shrink-0 mt-9 h-px border border-solid bg-neutral-100 border-neutral-100 max-md:max-w-full" />
            <form>
              <InputField
                name="name"
                label="Name"
                type="text"
                id="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="text-zinc-700 w-full"
                required
              />
              <InputField
                name="email"
                label="Email address"
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="border-slate-400 text-slate-400 w-full"
                required
              />
              <InputField
                name="phone"
                label="Phone Number"
                type="tel"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border-slate-400 text-slate-400 w-full"
                required
              />
              <InputField
                name="password"
                label="Create New Password"
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create New Password"
                className="border-slate-400 text-slate-400 w-full"
                required
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
                name="Sign Up"
                type="submit"
                className="justify-center items-center px-16 py-6 mt-10 w-full text-center text-white bg-yellow-400 rounded-md max-md:px-5 max-md:max-w-full"
              >
                Register Account
              </Button>
            </form>
            <p className="self-center mt-7 text-sm max-md:max-w-full">
              Already Have Account?{" "}
              <Link href="/login" className="text-yellow-500">
                Log in Here
              </Link>
            </p>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Register;
