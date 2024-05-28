import React from "react";

const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center items-end px-16 py-16 mt-44 w-full text-center capitalize bg-yellow-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-col mt-40 mr-44 max-w-full w-[1020px] max-md:mt-10 max-md:mr-2.5">
        <h1 className="text-7xl text-indigo-900 leading-[48.24px] max-md:max-w-full max-md:text-4xl">
          Eat, Cook, Repeat
        </h1>
        <div className="flex flex-col pl-14 mt-12 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <p className="text-2xl leading-6 text-neutral-500 max-md:max-w-full">
            Share your best recipe by uploading here !
          </p>
          <nav className="flex gap-5 self-end mt-56 max-w-full w-[926px] max-md:flex-wrap max-md:mt-10">
            <p className="flex-auto text-base leading-6 text-neutral-500 max-md:max-w-full">
              Product Company Learn more Get in touch{" "}
            </p>
            <div className="flex gap-1.5 self-start mt-1 text-sm leading-6 text-black whitespace-nowrap">
              <p>Arkademy</p>
            </div>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
