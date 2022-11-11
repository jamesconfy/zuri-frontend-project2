import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";

function HeaderSection() {
  return (
    <div className="absolute lg:flex flex-row items-center p-0 gap-[99px] md:top-[216px] top-[150px] lg:mx-[100px] mx-5">
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

      <div className="lg:block flex flex-col gap-6 lg:mt-0 mt-5">
        <div className="flex flex-row items-center justify-center gap-5">
          <img src={image3} alt="image3" className="lg:absolute left-[987px] top-0" />
          <img src={image4} alt="image4" className="lg:absolute left-[745px] top-[99px]" />
        </div>

        <div className="flex flex-row items-center justify-center gap-5">
          <img src={image5} alt="image5" className="lg:absolute left-[987px] top-[184px]" />
          <img src={image6} alt="image6" className="lg:absolute left-[745px] top-[283px]" />
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
