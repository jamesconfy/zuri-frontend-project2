import Span from "../components/Span";
import location from "../assets/location.svg";

function NavHeader() {
  return (
    <div className="absolute lg:flex hidden flex-row items-start p-0 gap-12 lg:mx-[120px] top-[143px]">
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="Restaurant" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="Cottage" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="Castle" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="fantast city" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="Beach" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="Carbins" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="off-grid" />
      <Span spanClass="text-[#434343] text-[20px] leading-[25px] font-[400]" text="Farm" />

      <button
        className="box-border flex flex-row border-[1px] border-solid border-[#B4B4B4] rounded-[8px] gap-8 top-[143px] left-[1234px] p-2"
        type="button"
      >
        <span className="flex justify-start text-[16px] font-[400] text-center text-[#333333] leading-[19px]">Location</span>
        <img src={location} alt="location" className="" />
      </button>
    </div>
  );
}

export default NavHeader;
