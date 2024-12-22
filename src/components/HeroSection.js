import React from "react";
import Image from "next/image";
import Link from "next/link";
import dashboard from "../images/pngs/dashboard.png";

const HeroSection = () => {
  return (
    <div className="bg-[#051139] md:pt-[83px] pt-[62px]">
      <div className="custom-container">
        <div className="md:max-w-[776px] mx-auto">
          <h1 className="font-clash font-semibold xl:text-[64px] lg:text-[55px] md:text-[50px] text-[32px] text-white  text-center mb-[18px] capitalize">
            Integrate AI for a competitive analysis for your business ⭐️
          </h1>
          <p className="font-poppins text-[#EBEBEB] mb-10 mx-auto text-center md:max-w-[560px]">
            Elevate your advertising game with creatives that consistently
            outperform your competitors, setting your brand apart.
          </p>
          <div className="flex items-center justify-center space-x-5 ">
            <button className=" md:px-7 px-4 py-[14px] bg-[#6A65FF] rounded-[10px] font-clash font-semibold  text-white">
              <Link href={"#"}>Join The waitlist</Link>
            </button>
            <button className=" md:px-7 px-4 py-[14px] bg-transparent rounded-[10px] font-clash font-semibold border border-white text-white">
              <Link href={"#"}>Know More</Link>
            </button>
          </div>
        </div>
        <Image src={dashboard} alt="Dashboard" className="mt-[71px] mx-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
