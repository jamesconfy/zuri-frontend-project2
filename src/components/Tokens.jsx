import mbtoken from "../assets/mbtoken.svg";
import openSea from "../assets/openSea.svg";
import metamusk from "../assets/metamusk.svg";

function Tokens() {
  return (
    <div className="absolute md:flex block flex-row justify-center items-center py-[10px] md:px-[100px] px-5 gap-[264px] left-0 lg:top-[742px] top-[1050px] bg-gradient-to-r from-[#A02279] to-[#A02279] w-full">
      <div className="flex flex-row md:mt-0 mt-5">
        <img src={mbtoken} alt="mb_token" />
        <span className="flex font-[600] text-[40px] items-center text-[#F7F7F7] leading-[27px]">MBToken</span>
      </div>

      <div className="flex flex-row md:mt-0 mt-5">
        <img src={metamusk} alt="mb_token" />
        <span className="flex font-[600] text-[40px] items-center text-[#F7F7F7] leading-[27px]">MetaMusk</span>
      </div>

      <div className="flex flex-row md:my-0 my-5 ">
        <img src={openSea} alt="mb_token" />
        <span className="flex font-[600] text-[40px] items-center text-[#F7F7F7] leading-[27px]">OpenSea</span>
      </div>
    </div>
  );
}

export default Tokens;
