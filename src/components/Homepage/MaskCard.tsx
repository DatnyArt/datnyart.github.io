import { Mask } from "@/config/masks";

interface MaskCardProps {
  mask: Mask;
}

export const MaskCard = ({ mask }: MaskCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[32px] leading-none italic font-instrument-serif">
        {mask.name}
      </span>
      <img
        src={mask.image}
        alt={`${mask.name} Mask`}
        className="w-full h-auto"
      />
      <div className="flex flex-col items-center text-[25px] leading-none italic font-instrument-serif">
        <span>${mask.price}</span>
        <span>{mask.quantity} MASKS</span>
      </div>
    </div>
  );
};
