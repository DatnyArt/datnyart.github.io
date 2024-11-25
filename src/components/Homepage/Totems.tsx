import MaskSvg from "@/assets/icons/mask.svg";
import { masks } from "@/config/masks";
import { MaskCard } from "./MaskCard";
import OpenSeaSvg from "@/assets/icons/opensea.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";

export const Totems = () => {
  return (
    <div className="relative max-md:top-px max-md:-mt-px">
      <img
        src="https://utfs.io/f/5s6Tk8MoZavNoWHFvw2QvqWh5RBHGa3efn4dTwcCU9kzJxVb"
        alt="Section Red"
        className="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div className="mt-8 xl:mt-[174px] xl:max-w-[726px] w-full xl:ml-auto relative z-10 px-4 xl:pr-[60px] pb-[60px] xl:pb-[86px]">
        <h3 className="text-[56px] leading-[68px] font-instrument-serif italic tracking-wide xl:hidden">
          UPCOMING GAME PROJECTS:
        </h3>
        <div className="mt-8 xl:mt-0 flex gap-[14px] ">
          <MaskSvg className="h-[80px] w-auto" />
          <div className="flex flex-col">
            <p className="text-[48px] font-instrument-serif italic tracking-wide leading-none">
              "TOTEMS"
            </p>
            <p className="text-[32px] font-instrument-serif italic tracking-wide leading-none">
              & THE MASKS - NFT KEYS
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-6 tracking-wider">
          <p>
            The next community games project will be based on the theme of
            creating and customising Totems. In the future, the NFT masks will
            serve as game keys.
          </p>
          <p>
            We are now presenting the first four masks in the collection,
            available for purchase for a total of{" "}
            <span className="font-bold">4,000 pieces.</span>
          </p>
          <p>
            They allow you to log into the game as{" "}
            <span className="font-bold">one of the first players</span> and
            <span className="font-bold">
              {" "}
              benefit from bonuses (boosts)
            </span>{" "}
            and <span className="font-bold">Airdrop Points.</span>
          </p>
          <p>
            We plan to launch the project within the next three months. We will
            select the EVM chain that will enable the project to be most
            beneficial to its community.
          </p>
          <p className="font-bold">YOU CAN BUY THEM AS ONE OF THE FIRST!</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 mt-10 gap-y-4 md:grid-cols-4 md:grid-rows-1 md:gap-x-4">
          {masks.map((mask) => (
            <MaskCard key={mask.id} mask={mask} />
          ))}
        </div>
        <p className="mt-4 tracking-wider xl:mt-8">
          To start production on this project, we first need to sell 80% of our
          collection.
        </p>
        <p className="uppercase font-bold italic tracking-wider mt-4 text-[#FFE500]">
          become one of the first backers and help us reach this goal.
        </p>

        <div className="p-px mt-4 bg-gradient-to-r from-black to-white w-fit xl:mt-8">
          <div className="flex items-center gap-2 px-6 py-4 bg-black">
            <span className="font-semibold">Soon on OpenSea</span>
            <ArrowRight className="size-6" />
            <OpenSeaSvg className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
