import star from "../assets/star.svg";

function Image({ image }) {
  return (
    <div className="flex flex-col box-border border-[1px] border-solid border-[#D7D7D7] p-4 rounded-[15px]">
      <div className="relative w-full group">
        <img src={image} alt={`${image}_image`} className="cursor-pointer" />
        <div className="flex flex-row justify-between my-4">
          <span className="font-[400] text-[12px] leading-[13px] text-[#434343]">Desert King</span>
          <span className="font-[400] text-[12px] leading-[13px] text-[#434343]">1MBT per night</span>
        </div>

        <div className="flex flex-row justify-between my-4">
          <span className="font-[400] text-[12px] leading-[13px] text-[#434343]">2345km away</span>
          <span className="font-[400] text-[12px] leading-[13px] text-[#434343]">available for 2weeks stay</span>
        </div>

        <img src={star} alt={star} className="flex flex-row items-start" />
      </div>
    </div>
  );
}

export default Image;
