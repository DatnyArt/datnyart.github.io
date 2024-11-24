import { Monadology } from "@/components/Homepage/Monadology";
import { Totems } from "@/components/Homepage/Totems";

export const GameProjects = () => {
  return (
    <div className="w-full relative">
      <section className="xl:grid-cols-2 w-full grid">
        <h3 className="leading-[68px] absolute left-1/2 -translate-x-1/2 top-[72px] text-[56px] font-instrument-serif italic z-10 tracking-wide w-full text-center max-xl:hidden">
          UPCOMING GAME PROJECTS:
        </h3>
        <Totems />
        <Monadology />
      </section>
    </div>
  );
};
