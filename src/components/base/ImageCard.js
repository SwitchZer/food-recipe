import React from "react";

const ImageCard = ({ src, alt, text, onClick }) => {
  return (
    <div
      className="box relative rounded-15 p-30 20 cursor-pointer"
      onClick={onClick}
    >
      <img src={src} alt={text} className="h-350" />
      <p className="absolute bottom-5 left-5 text-2xl text-white">{text}</p>
    </div>
  );
};

export default ImageCard;
