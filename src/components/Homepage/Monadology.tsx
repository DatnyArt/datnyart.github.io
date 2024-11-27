import PicklockSvg from "@/assets/icons/picklock.svg";
import MonadSvg from "@/assets/icons/monad.svg";
import OpenSeaSvg from "@/assets/icons/opensea.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";

export const Monadology = () => {
  return (
    <div className="relative">
      <img
        src="https://utfs.io/f/5s6Tk8MoZavNWRKY1nzaAKF7J5cUvelrhIPOSXVz1GW8qYgs"
        alt="Section Blue"
        className="absolute top-0 right-0 object-cover w-full h-full"
      />
      <div className="mt-8 xl:mt-[174px] xl:max-w-[726px] xl:mr-auto relative z-10 px-4 xl:pl-[60px] pb-[60px] xl:pb-[86px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-[14px] items-center">
            <PicklockSvg className="h-[60px] w-auto" />
            <div className="flex flex-col">
              <p className="text-[48px] font-instrument-serif italic tracking-wide leading-none">
                “MONADOLOGY”
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="italic font-instrument-serif">
              for the community:
            </span>
            <MonadSvg />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-6 tracking-wider">
          <p>
            The project we are developing for the Monad community is inspired by
            Leibniz's concept of monads.
          </p>
          <p>
            While it will share similarities with{" "}
            <span className="font-bold">1 MILLION CUBES</span>, it will feature
            different gameplay mechanics and different rewards.
          </p>
          <p>
            Our aim is to emphasize both cooperation and competition
            simultaneously.
          </p>
          <p>
            <span className="font-bold">All holders of this PICKLOCK</span> will
            have the ability to start the game at a different time than others.
          </p>
          <p>
          We need time for development and testing, so it is important to start
            the project early, so we want to publish this collection on Ethereum.
            We assure you that as soon as the Monad chain is ready, we will
            move all NFTs to it. Thank you for your understanding and
            cooperation.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex flex-col font-instrument-serif italic leading-[1.2] tracking-wider">
            <span className="text-[32px]">PICKLOCK</span>
            <span className="text-[24px]">NFT KEY</span>
          </div>
          <img
            src="https://utfs.io/f/5s6Tk8MoZavN5bkrK9oMoZavNIhFYlutkwLn8e9CMfPzR1GQ"
            alt="Key"
            className="w-[100px] h-auto"
          />
          <span className="font-instrument-serif italic leading-[1.2] tracking-wider text-[32px]">
            1500 x $50
          </span>
        </div>
        <p className="mt-2 tracking-wider">
          To launch this project within the Monad community, we need to first
          sell 90% of our collection.
        </p>
        <p className="uppercase font-bold italic tracking-wider mt-4 text-[#FFE500]">
          Let’s get it done, NADs.
        </p>
        <a
          href="https://opensea.io/collection/monadology"
          target="_blank"
          rel="noreferrer"
        >
          <div className="p-px mt-4 bg-gradient-to-r from-black to-white w-fit xl:mt-8">
            <div className="flex items-center gap-2 px-6 py-4 bg-black">
              <span className="font-semibold">Buy Now on OpenSea</span>
              <ArrowRight className="size-6" />
              <OpenSeaSvg className="size-6" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
