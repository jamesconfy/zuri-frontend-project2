import { FaAngleRight } from "react-icons/fa";

function ConnectButton({ src, title }) {
  return (
    <div className="box-border flex flex-row justify-between items-center py-3 px-5 bg-[#F8F9FA] border-[1px] border-solid border-[#CFD8DC] rounded-xl w-full">
      <div className="flex flex-row items-center p-0 gap-4">
        <img src={src} alt={`image_${src}`} className="w-[44px] h-[44px]" />
        <span className="text-[#000000] text-[18px] font-[600] leading-[23px]">{title}</span>
      </div>

      <FaAngleRight />
    </div>
  );
}

export default ConnectButton;
