import houseFoot from "../assets/houseFoot.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="md:flex md:flex-col justify-between items-center md:p-0 p-4 w-full bg-[#1D1D1E]">
      <div className="md:flex grid justify-between md:items-center md:flex-row grid-cols-2 grid-rows-2 p-0 mt-4 mb-10 mx-auto md:w-5/6">
        <div className="flex flex-col gap-4 md:m-0 m-4">
          <div className="flex flex-row">
            <img src={houseFoot} alt="meta" className="flex" />
            <span className="text-[#F1F3F9] text-[40px] font-[500]">Metabnb</span>
          </div>

          <div className="flex flex-row justify-start items-start gap-6 mt-10">
            <FaFacebookF className="text-[#F1F3F9]" />
            <FaInstagram className="text-[#F1F3F9]" />
            <FaTwitter className="text-[#F1F3F9]" />
          </div>

          <div className="flex flex-row justify-start items-start gap-6 mt-10">
            <FaRegCopyright className="text-[#F1F3F9]" />
            <span className="text-[#F1F3F9] text-[12px] font-[500]">2022 Metabnb</span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 md:m-0 m-4">
          <span className="text-[#F1F3F9] text-[18px] font-[400]">Community</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">NFT</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Tokens</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Landlords</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Discord</span>
        </div>

        <div className="flex flex-col justify-between gap-5 md:m-0 m-4">
          <span className="text-[#F1F3F9] text-[18px] font-[400]">Places</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Castle</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Farms</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Beach</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Learn more</span>
        </div>

        <div className="flex flex-col justify-between gap-5 md:m-0 m-4">
          <span className="text-[#F1F3F9] text-[18px] font-[400]">About Us</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Road map</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Creators</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Careers</span>
          <span className="text-[#F1F3F9] text-[14px] font-[400] ">Contact us</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
