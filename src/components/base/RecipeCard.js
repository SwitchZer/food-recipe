import React from "react";

const RecipeCard = ({ src, alt, heading, subheading, description }) => {
  return (
    <section className="flex flex-col px-5 my-auto max-md:max-w-full">
      <div className="text-6xl max-md:max-w-full max-md:text-4xl">
        {heading}
      </div>
      <hr className="shrink-0 mt-7 h-0.5 border-2 border-solid bg-stone-600 border-stone-600 max-md:max-w-full" />
      <p className="mt-11 text-2xl tracking-wider leading-8 max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
      <a
        href="#"
        className="justify-center self-start px-14 py-7 mt-14 text-base tracking-wider text-white bg-yellow-400 rounded-lg max-md:px-5 max-md:mt-10"
      >
        Learn More
      </a>
    </section>
  );
};

export default RecipeCard;
