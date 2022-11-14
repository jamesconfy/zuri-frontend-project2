import translatedImage from "../assets/translatedImage.svg";

function BottomSection() {
  return (
    <div className="box-border md:flex grid md:flex-row grid-cols-1 w-full justify-between gap-12 border-[1px] border-solid border-[#000000] bg-gradient-to-r from-[#A02279] to-[#A02279] ">
      <div className="md:flex grid md:flex-row grid-cols-1 justify-between w-5/6 m-auto py-20 md:gap-40 gap-12">
        <div className="flex flex-col gap-10 items-start md:w-1/2 w-full">
          <span className="text-[#FFFFFF] font-[700] text-[48px] leading-[60px]">Metabnb NFTs</span>
          <span className="text-[#FFFFFF] font-[400] text-[18px] leading-[35px]">
            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </span>
          <button className="flex bg-[#FFFFFF] rounded-[8px] p-4 w-[150px] items-center justify-center" type="button">
            Learn more
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <img src={translatedImage} alt="translated_image" />
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
