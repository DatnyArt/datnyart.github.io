import { Homepage } from "./pages/Homepage";

export const Layout = () => {
  return (
    <div className="font-jakarta flex flex-col w-full min-h-screen  bg-black overflow-hidden text-white">
      <Homepage />
    </div>
  );
};
