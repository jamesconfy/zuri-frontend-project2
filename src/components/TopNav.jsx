import meta from "../assets/metabnb.svg";
import connect from "../assets/connect.svg";

function TopNav() {
  return (
    <nav className="relative flex flex-row lg:mr-[100px] lg:ml-[100px] top-[43px]">
      <img src={meta} alt="meta" className="absolute left-[3.62%] right-[81.21%] top-[16.96%] lg:bottom-[15.97%]" />
      <div className="absolute lg:flex hidden flex-row items-start p-0 gap-12 left-[31.94%] right-[17.58%] mt-4">
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">Home</span>
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">Place To Stay</span>
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">NFT</span>
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">Community</span>
      </div>

      <img src={connect} alt="connect" className="absolute lg:left-[86.29%] right-0 bottom-0 top-0 box-border rounded-[10px]" />
    </nav>
  );
}

export default TopNav;
