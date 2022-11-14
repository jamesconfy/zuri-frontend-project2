import { AiOutlineClose } from "react-icons/ai";
import fox from "../assets/fox.svg";
import arrow from "../assets/arrow.svg";
import ConnectButton from "./ConnectButton";

function Modal({ show, setShow }) {
  return (
    <div className="fixed bg-rgba inset-0 opacity-100 z-10">
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-start p-0 rounded-2xl bg-[#FFFFFF] md:w-5/12 w-11/12">
          <div className="flex flex-row justify-between items-center px-8 py-6 w-full">
            <span className="text-[#333333] font-[700] text-[24px] leading-[30px]">Connect me</span>
            <button onClick={() => setShow(!show)} type="button">
              <AiOutlineClose className="flex w-6 h-6" />
            </button>
          </div>
          <hr className="box-border border-[1px] border-solid border-[#CFD8DC] w-full" />

          <div className="flex flex-col items-start p-8 gap-4 w-full">
            <span className="font-[400] text-[16px] leading-5 text-[#333333]">Choose your preferred wallet:</span>
            <ConnectButton src={fox} title="Metamusk" />
            <ConnectButton src={arrow} title="WalletConnect" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
