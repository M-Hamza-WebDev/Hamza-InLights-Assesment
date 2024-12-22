"use client";
import React, { useState } from "react";
import checkCircle from "@/images/svgs/check-circle.svg";
import checkGold from "@/images/svgs/check-circle-gold.svg";
import Link from "next/link";
import Image from "next/image";
const Pricing = () => {
  const [time, setTime] = useState("Monthly");
  let pricingCards = [
    {
      name: "SILVER",
      monthlyPrice: "$50",
      yearlyPrice: "$500",
      time: time.includes("Month") ? "/month" : "/year",
      features: [
        { feature: "No Discount" },
        { feature: "Basic Support" },
        { feature: "Ads Banner Free" },
        { feature: "Design Style " },
        { feature: "Component Library" },
        { feature: "All limited links" },
        { feature: "Own analytics platform" },
        { feature: "Chat support" },
        { feature: "Optimize hashtags" },
        { feature: "Unlimited users" },
      ],
    },
    {
      name: "GOLD",
      monthlyPrice: "$100",
      yearlyPrice: "$700",
      time: time.includes("Month") ? "/month" : "/year",
      features: [
        { feature: "No Discount" },
        { feature: "Basic Support" },
        { feature: "Ads Banner Free" },
        { feature: "Design Style " },
        { feature: "Component Library" },
        { feature: "All limited links" },
        { feature: "Own analytics platform" },
        { feature: "Chat support" },
        { feature: "Optimize hashtags" },
        { feature: "Unlimited users" },
      ],
    },
    {
      name: "PREMIUM",
      monthlyPrice: "$150",
      yearlyPrice: "$900",
      time: time.includes("Month") ? "/month" : "/year",
      features: [
        { feature: "No Discount" },
        { feature: "Basic Support" },
        { feature: "Ads Banner Free" },
        { feature: "Design Style " },
        { feature: "Component Library" },
        { feature: "All limited links" },
        { feature: "Own analytics platform" },
        { feature: "Chat support" },
        { feature: "Optimize hashtags" },
        { feature: "Unlimited users" },
      ],
    },
  ];
  return (
    <div className="bg-[#051139] pt-[101px] pb-[223px]">
      <div className="custom-container ">
        <h2 className="font-clash font-semibold xl:text-[60px] md:text-[45px] text-[36px] text-white text-center mb-[10px]">
          Pricing Plans
        </h2>
        <p className="font-dm font-medium tracking-[-0.5px] text-[#FFFFFFBF] mb-[64px] text-center max-w-[494px] mx-auto">
          Coca landing page UI Kit no credit card required. All plans come with
          a free, 14 day trial of our Premium features.
        </p>
        <div className="border border-[#E9ECF2] rounded-lg flex items-center w-fit mx-auto bg-white">
          <button
            onClick={() => setTime("Monthly")}
            className={`font-dm font-bold text-sm tracking-[-0.5px] text-[#808D9E]  px-7 py-3  rounded-l-lg ${
              time === "Monthly" && "bg-[#515DEF] !text-white "
            } `}
          >
            Monthly
          </button>
          <button
            onClick={() => setTime("Yearly")}
            className={` font-dm font-bold text-sm tracking-[-0.5px] text-[#808D9E]  px-7 py-3  rounded-r-lg ${
              time === "Yearly" ? "bg-[#515DEF] !text-white " : "animate-pulse"
            }`}
          >
            Yearly
          </button>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-14  gap-x-11 mt-[83px]">
          {pricingCards.map((item, index) => {
            return (
              <div key={index} className="relative">
                {item.name.includes("GOLD") && (
                  <div className="text-center font-dm font-bold text-sm px-[18px] py-[14px] text-[#313131] rounded-[60px]  bg-[#FFD88D] border-8 border-white absolute  left-1/2 -translate-x-1/2 top-[-32px]   ">
                    MOST POPULAR
                  </div>
                )}
                <div
                  className={`border border-[#E9ECF2]  rounded-[26px] px-11 pt-[34px] pb-[64px] ${
                    item.name.includes("GOLD") ? "bg-[#515DEF]" : "bg-[#0D1849]"
                  } `}
                >
                  <span className="opacity-50 font-dm font-bold text-sm tracking-[-0.5px] text-white block mb-[6px]">
                    {item.name}
                  </span>
                  <span className="font-clash font-semibold text-[48px] tracking-[-2%] text-white block pb-6 border-b border-[#F2F4FC]">
                    {time.includes("Month")
                      ? item.monthlyPrice
                      : item.yearlyPrice}
                    <span className="font-dm font-medium text-lg text-white">
                      {item.time}
                    </span>
                  </span>
                  <div className="pt-6 space-y-6">
                    {item.features.map((sub_item, sub_index) => {
                      return (
                        <div
                          key={sub_index}
                          className="flex items-center space-x-[10px]"
                        >
                          <Image
                            src={item.name === "GOLD" ? checkGold : checkCircle}
                            alt={"Check Circle"}
                          />
                          <span className="block font-dm text-sm text-white">
                            {sub_item.feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <button className=" px-6  py-[14px] bg-white rounded-lg font-dm font-bold  text-[#515DEF] mt-[58px]">
                    <Link href={"#"}>Choose plan</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
