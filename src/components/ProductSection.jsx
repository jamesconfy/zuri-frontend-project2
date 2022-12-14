import Image from "./Image";
import frame1 from "../assets/frame1.svg";
import frame2 from "../assets/frame2.svg";
import frame3 from "../assets/frame3.svg";
import frame4 from "../assets/frame4.svg";
import frame5 from "../assets/frame5.svg";
import frame6 from "../assets/frame6.svg";
import frame7 from "../assets/frame7.svg";
import frame8 from "../assets/frame8.svg";
import frame9 from "../assets/frame9.svg";
import frame10 from "../assets/frame10.svg";
import frame11 from "../assets/frame11.svg";
import frame12 from "../assets/frame12.svg";
import frame13 from "../assets/frame13.svg";
import frame14 from "../assets/frame14.svg";
import frame15 from "../assets/frame15.svg";
import frame16 from "../assets/frame16.svg";

function ProductSection({ i }) {
  const frames = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
    frame13,
    frame14,
    frame15,
    frame16,
  ];

  const newFrames = frames.filter((_, index) => index < i);

  return (
    <div className="flex flex-col justify-center items-center p-0 gap-6 my-8 w-full">
      <div className="flex justify-between items-center sm:flex-row flex-col p-0 gap-6 mt-4 mb-10">
        <div className="flex flex-wrap justify-center gap-6">
          {newFrames.map((frame, i) => (
            <Image image={frame} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
