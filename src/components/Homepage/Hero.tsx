import CubeArrow from "@/assets/icons/cube-arrow.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import Cube from "@/assets/icons/cube.svg";
import DatnyLogoBackground from "@/assets/icons/datny-logo.svg";

export const Hero = () => {
  return (
    <section
      style={{
        background: `linear-gradient(157.22deg, #0C0C0C 51.72%, #232323 151.39%),
                  linear-gradient(358.69deg, rgba(7, 7, 7, 0) 51.68%, #07334D 97.23%)`,
      }}
      className="relative flex flex-col items-center w-full px-4"
    >
      <img
        src="https://utfs.io/f/5s6Tk8MoZavNp1ymm8Ve469xbChpRQ8Jyka7cUzwP5WqdfE2"
        className="absolute top-0 left-0 object-cover object-left w-full h-full"
      />
      <DatnyLogoBackground className="absolute left-1/2 -translate-x-1/2 min-w-[590px] h-auto max-w-[2110px] w-full lg:top-[-6vw] top-[32px]" />
      <div className="relative z-10 flex flex-col items-center w-full gap-8 pt-4">
        <img
          src="https://utfs.io/f/5s6Tk8MoZavNsoXJV0dc9mt6WPAbiJ7jazxOQ52YHMdk0vZU"
          alt="Datny Logo"
          className="w-[375px] h-[120px]"
        />
        <h2 className="text-center text-2xl font-instrument-serif italic text-[#F3F3F3] tracking-wide">
          Contemporary Artist & Creative Collective.
          <br className="hidden md:block" /> New media artist using
          decentralized technologies to create interactive community art
        </h2>
      </div>
      <h1 className="mt-[162px] flex flex-col items-center text-center relative z-10">
        <p className="text-[56px] font-instrument-serif italic">PROJECT:</p>
        <p className="text-[60px] font-amelie-fierce leading-[71px] mt-8">
          1 Million
          <br className="md:hidden" /> cubes
        </p>
      </h1>
      <div className="mt-[65px] flex flex-col items-center relatize z-10 mb-[105px]">
        <CubeArrow className="w-[112px]" />
        <a
          className="p-px mt-8 bg-gradient-to-r from-black to-white "
          href="https://1millioncubes.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a
            className="flex items-center gap-2 px-6 py-4 bg-black"
            href="https://1millioncubes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-semibold">View Project</span>
            <ArrowRight className="size-6" />
            <Cube className="size-6" />
          </a>
        </a>
      </div>
      <img
        src="https://utfs.io/f/5s6Tk8MoZavN8L9GsAgj1TDEVKf7gyGN3RvSsd4m2oblBuUw"
        alt="Cube"
        className="bottom-0 left-1/2 absolute -translate-x-1/2 min-w-[813px] h-auto"
      />
    </section>
  );
};
