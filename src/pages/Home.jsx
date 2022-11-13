import HeaderSection from "../components/HeaderSection";
import ProductSection from "../components/ProductSection";
import Tokens from "../components/Tokens";

function Home() {
  return (
    <div className="flex flex-col bg-[#FFFFFF]">
      <HeaderSection />
      <Tokens />
      <div className="flex flex-col md:my-12 my-5 justify-center">
        <span className="text-[#000000] font-[700] md:text-[48px] text-[28px] leading-[60px] text-center">Inspiration for your next adventure</span>
        <ProductSection i={8} />
      </div>
    </div>
  );
}

export default Home;
