import Image from "next/image";
import React from "react";

const ImageCard = ({ src, text, onClick }) => {
  return (
    <div className="box relative p-30 20 cursor-pointer">
      <Image
        onClick={onClick}
        src={src}
        alt={text}
        className="w-full h-80 flex flex-col justify-end items-start p-6 rounded-xl bg-cover cursor-pointer max-md:max-w-full"
        width={1000}
        height={1000}
      />
      <p className="absolute bottom-11 left-10 text-2xl text-yellow-500">
        {text}
      </p>
    </div>
  );
};

export default ImageCard;
