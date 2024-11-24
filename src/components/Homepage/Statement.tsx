import DatnyLogo from "@/assets/icons/logo.svg";
import XIcon from "@/assets/icons/X.svg";
import TelegramIcon from "@/assets/icons/telegram.svg";

export const Statement = () => {
  return (
    <section className="relative">
      <img
        src="https://utfs.io/f/5s6Tk8MoZavNXj2AzghIfZYnVJP2iyWwmeThq7p6jUl8rE05"
        className="absolute left-0 object-cover h-full w-full object-top"
      />
      <div className="flex flex-col items-center italic font-instrument-serif tracking-wider leading-none px-4 max-w-[788px] w-full mx-auto relative z-10">
        <div className="mt-[88px] flex flex-col items-center md:block">
          <span className="text-[80px] ">SALUTE!</span>
          <span className="text-[30px]">our statement</span>
        </div>
        <span className="text-[50px] mt-8">We create</span>
        <span className="mt-4 text-[40px]">/</span>
        <p className="text-center mt-4 text-[24px]">
          Interactive art designed for the community, blending blockchain
          technologies,
          <br className="hidden md:block" /> cryptography and decentralised
          technology solutions.
        </p>
        <span className="mt-4 text-[40px]">/</span>
        <p className="text-center mt-4 text-[24px]">
          Transparent solutions focused on social experiences.
        </p>
        <span className="mt-4 text-[40px]">/</span>
        <p className="text-center mt-4 text-[24px]">
          Community engaging projects - creating value for itself.
        </p>
        <span className="mt-4 text-[40px]">/</span>
        <p className="text-center mt-4 text-[24px]">
          Sharing the projects to be developed by the users in the community.
          <br className="hidden md:block" /> Making them accessible and open to
          be co-created and re-created by anyone willing to get involved.
        </p>
        <div className="mt-8 flex items-center gap-2.5 flex-col">
          <DatnyLogo />
          <div className="flex items-center gap-5">
            <XIcon />
            <TelegramIcon />
          </div>
          <span className="text-[#A6A6A6] text-sm font-jakarta not-italic tracking-wide mb-4">
            ©2024 x DATNY{" "}
          </span>
        </div>
      </div>
    </section>
  );
};
