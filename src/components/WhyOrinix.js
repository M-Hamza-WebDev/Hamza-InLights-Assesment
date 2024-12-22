import React from "react";
import videoBackground from "@/images/pngs/video-background.png";
import videoPlay from "@/images/svgs/video-play.svg";
import responsive from "@/images/svgs/responsive.svg";
import layout from "@/images/svgs/layout.svg";
import fasterLoading from "@/images/svgs/faster-loading.svg";
import superSupport from "@/images/svgs/super-support.svg";
import documentation from "@/images/svgs/documentation.svg";
import updates from "@/images/svgs/updates.svg";
import Image from "next/image";
import Link from "next/link";

const WhyOrinix = () => {
  let whyUs = [
    {
      icon: responsive,
      alt: "Responsive",
      title: "Fully Responsive",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: layout,
      alt: "Layout",
      title: "Multiple Layouts",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: fasterLoading,
      alt: "Faster Loading",
      title: "Faster Loading",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: superSupport,
      alt: "Super Support",
      title: "Super Support",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: documentation,
      alt: "Rich Documentation",
      title: "Rich Documentation",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
    {
      icon: updates,
      alt: "Lifetime Updates",
      title: "Lifetime Updates",
      description:
        "With lots of unique blocks, you can easily build a page without coding.",
    },
  ];
  return (
    <div className="bg-[#0d1849] md:pt-[124px] pt-[80px]  xl:pb-[180px] md:pb-[124px] pb-[80px] ">
      <div className="custom-container">
        <h2 className="font-clash font-semibold xl:text-[60px] md:text-[45px] text-[28px] text-white mb-5 max-w-[613px] mx-auto text-center">
          Why Orinix would be your best fit?
        </h2>
        <p className="font-poppins md:text-[21px] tracking-[-0.66px] text-[#FFFFFFBF] text-center">
          Watch this 1 min video to learn about Orinix.
        </p>
        <div className="mx-auto mt-[67px] relative">
          <Image src={videoBackground} alt="Video Background" />
          <Link href={"#"}>
            <Image
              src={videoPlay}
              alt="Video Play"
              className="absolute inset-0 m-auto md:w-auto w-[50px]"
            />
          </Link>
        </div>
        <div className="mt-[105px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-[103px] gap-y-[50px]">
          {whyUs.map((item, index) => {
            return (
              <div key={index} className="max-w-[287px] mx-auto">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  className="mb-[22px] mx-auto"
                />
                <span className="font-clash font-semibold text-2xl text-white block mb-[11px] text-center">
                  {item.title}
                </span>
                <p className="font-open font-semibold tracking-[-0.5px] text-[#FFFFFFB2] text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyOrinix;
