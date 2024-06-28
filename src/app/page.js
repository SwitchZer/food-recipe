import { Footer, ImageCard, NavbarUser } from "@/components";
import { getRecipe } from "@/service/recipe";
import Image from "next/image";

const Home = async () => {
  const { data } = await getRecipe();
  return (
    <div className="flex flex-col bg-white">
      <NavbarUser />
      <div className="flex flex-col mb-9 w-full px-20 max-w-[1675px] max-md:max-w-full">
        <section className="container flex gap-5 mt-24 capitalize max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col gap-5 justify-between self-stretch w-full font-medium text-stone-700 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col flex-1 my-auto max-md:max-w-full">
                <h1 className="text-7xl font-medium text-indigo-900 leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
                  Discover Recipe <br />& Delicious Food
                </h1>
                <div className="flex gap-3 px-12 mb-4 mt-12 text-lg w-auto rounded-2xl bg-zinc-100 leading-[90px] text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:mt-10">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <Image
                    loading="lazy"
                    src="/Group 687.svg"
                    alt="Search Icon"
                    className="shrink-0 aspect-square w-[18px]"
                    width={100}
                    height={100}
                  />
                  <input
                    type="search"
                    id="search"
                    className="flex-auto border-none bg-zinc-100 max-md:max-w-full"
                    placeholder="search restaurant, food"
                    aria-label="search restaurant, food"
                  />
                </div>
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/560e94c81b13efed0e5e2d1c732a08c74e30a5af637d838dbbbd05d4be09767a.png"
                  className="w-full rounded-2xl aspect-[1.06] max-md:max-w-full"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex gap-5 self-start mt-28 text-5xl font-medium capitalize leading-[61.92px] text-stone-700 max-md:mt-10 max-md:text-4xl">
          <div className="shrink-0 bg-yellow-400 h-[140px] w-[25px]" />
          <h2 className="flex-auto my-auto max-md:text-4xl">
            Popular For You!
          </h2>
        </section>
        <div className="flex flex-col gap-5 justify-between self-stretch mt-24 w-full font-medium text-stone-700 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/3ca63d8f8c6cd7ffbe02625bcb41f3b8a630acc46486f74271ac2812a57ec310.png"
                className="w-full rounded-2xl aspect-[1.06] max-md:max-w-full"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 my-auto max-md:max-w-full">
                <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                  Healthy Bone Broth Ramen (Quick & Easy)
                </div>
                <div className="shrink-0 mt-7 h-0.5 border-2 border-solid bg-stone-600 border-stone-600 max-md:max-w-full" />
                <div className="mt-11 text-2xl tracking-wider leading-8 max-md:mt-10 max-md:max-w-full">
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                  in a hurry? That’s right!
                </div>
                <div className="justify-center self-start px-14 py-7 mt-14 text-base tracking-wider text-white bg-yellow-400 rounded-lg max-md:px-5 max-md:mt-10">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="flex gap-5 self-start mt-28 text-5xl font-medium capitalize leading-[61.92px] text-stone-700 max-md:mt-10 max-md:text-4xl">
          <div className="shrink-0 bg-yellow-400 h-[140px] w-[25px]" />
          <h2 className="flex-auto my-auto max-md:text-4xl">New Recipe</h2>
        </section>

        <div className="flex flex-col gap-5 justify-between self-stretch mt-24 w-full font-medium text-stone-700 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/bbfc49f945db7f5f7886fd2d426dfb8bfc7228ef73425b72bba7ff2b436354c1.png"
                className="w-full rounded-2xl aspect-[1.06] max-md:max-w-full"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 my-auto max-md:max-w-full">
                <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                  Healthy Bone Broth Ramen (Quick & Easy)
                </div>
                <div className="shrink-0 mt-7 h-0.5 border-2 border-solid bg-stone-600 border-stone-600 max-md:max-w-full" />
                <div className="mt-11 text-2xl tracking-wider leading-8 max-md:mt-10 max-md:max-w-full">
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                  in a hurry? That’s right!
                </div>
                <div className="justify-center self-start px-14 py-7 mt-14 text-base tracking-wider text-white bg-yellow-400 rounded-lg max-md:px-5 max-md:mt-10">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col self-center px-px mt-52 w-full max-w-[1651px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 self-start text-5xl font-medium capitalize leading-[61.92px] text-stone-700 max-md:text-4xl">
            <div className="shrink-0 bg-yellow-400 h-[140px] w-[25px]" />
            <h2 className="flex-auto my-auto max-md:text-4xl">
              {" "}
              Popular Recipe{" "}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5  mb-32">
            {data.map((item) => (
              <ImageCard
                key={item.id}
                src={item.image || "/Rectangle 314.png"}
                text={item.title}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
