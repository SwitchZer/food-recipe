import Image from "next/image";
import React from "react";

const ImageCard = ({ src, text, onClick }) => {
  return (
    <div className="box relative p-30 20 cursor-pointer">
      <Image
        onClick={onClick}
        src={src}
        alt={text}
        className="w-full h-80 flex flex-col object-cover justify-end items-start p-6 rounded-xl bg-cover cursor-pointer max-md:max-w-full"
        width={1000}
        height={1000}
      />
      <p className="absolute bottom-11 [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black left-10 text-2xl font-bold text-yellow-300">
        {text}
      </p>
    </div>
  );
};

export default ImageCard;
