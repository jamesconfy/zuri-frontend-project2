import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";

function HeaderSection() {
  return (
    <div className="lg:flex flex-row justify-between items-center md:px-0 px-5 gap-[99px] md:w-5/6 md:mx-auto mt-4 mb-8">
      <div className="lg:flex flex-col items-start p-0 gap-12 lg:w-1/2">
        <h1 className="text-[56px] font-[400] leading-[140%] tracking-[-0.02em] text-[#434343]">
          Rent a <span className="text-[#A02279]">Place</span> away from <span className="text-[#A02279]">Home</span> in the{" "}
          <span className="text-[#A02279]">Metaverse</span>
        </h1>
        <h1 className="text-[24px] font-[400] leading-[35px] text-[#434343]">
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort
          zone
        </h1>
      </div>

      <div className="flex flex-row gap-2 lg:mt-0 mt-5">
        <div className="flex flex-col items-center justify-center gap-2 md:mt-[100px]">
          <img src={image3} alt="image3" className="flex" />
          <img src={image4} alt="image4" className="flex" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <img src={image5} alt="image5" className="flex" />
          <img src={image6} alt="image6" className="flex" />
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
