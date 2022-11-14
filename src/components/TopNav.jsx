import { useState } from "react";
import meta from "../assets/metabnb.svg";
import connect from "../assets/connect.svg";
import Modal from "./Modal";

function TopNav() {
  const [show, setShow] = useState(false);
  return (
    <nav className={`flex flex-row justify-between px-5 md:px-0 items-center mt-4 md:w-5/6 mx-auto`}>
      <img src={meta} alt="meta" className="flex" />
      <div className="lg:flex hidden flex-row items-start p-0 gap-12 mt-5">
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">Home</span>
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">Place To Stay</span>
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">NFT</span>
        <span className="text-[20px] font-[400] text-[#434343] leading-[25px]">Community</span>
      </div>

      <button type="button" onClick={() => setShow(!show)}>
        <img src={connect} alt="connect" className="flex box-border rounded-[10px] mt-2" />
      </button>

      {show && <Modal show={show} setShow={setShow} />}
    </nav>
  );
}

export default TopNav;
