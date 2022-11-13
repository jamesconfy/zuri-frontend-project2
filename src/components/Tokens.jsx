import mbtoken from "../assets/mbtoken.svg";
import openSea from "../assets/openSea.svg";
import metamusk from "../assets/metamusk.svg";

function Tokens() {
  return (
    <div className="flex bg-gradient-to-r from-[#A02279] to-[#A02279] w-full">
      <div className="md:w-5/6 m-auto grid gap-4 md:gap-20 md:grid-cols-3 py-3">
        <div className="flex flex-row justify-center">
          <img src={mbtoken} alt="mb_token" />
          <span className="flex font-[600] text-[40px] items-center text-[#F7F7F7] leading-[27px]">MBToken</span>
        </div>

        <div className="flex flex-row justify-center">
          <img src={metamusk} alt="mb_token" />
          <span className="flex font-[600] text-[40px] items-center text-[#F7F7F7] leading-[27px]">MetaMusk</span>
        </div>

        <div className="flex flex-row justify-center">
          <img src={openSea} alt="mb_token" />
          <span className="flex font-[600] text-[40px] items-center text-[#F7F7F7] leading-[27px]">OpenSea</span>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
