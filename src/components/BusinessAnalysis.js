import Image from "next/image";
import React from "react";
import activity from "../images/pngs/activity.png";
import trusted from "../images/svgs/trusted.svg";
import hired from "../images/svgs/hired.svg";
import categories from "../images/svgs/categories.svg";
const BusinessAnalysis = () => {
  let benefits = [
    {
      icon: trusted,
      alt: "Trusted",
      title: "Trusted and Acccurate",
      description:
        "Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis ",
    },
    {
      icon: hired,
      alt: "Hired",
      title: "Hired By Top Company",
      description:
        "Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis ",
    },
    {
      icon: categories,
      alt: "Categories",
      title: "Various Categories",
      description:
        "Amet minim mollit non deserunt ullamco est sit dolor do amet sint.Velit officia consequat duis ",
    },
  ];
  return (
    <div className="lg:pt-[229px] pt-[101px] pb-[101px] bg-[#05123c]">
      <div className="custom-container lg:flex lg:justify-between lg:items-center">
        <Image
          src={activity}
          alt="Activity"
          width={596}
          height={699}
          className="xl:max-w-[596px] md:max-w-[450px] max-w-fit lg:mx-0 mx-auto"
        />

        <div className="xl:max-w-[620px] lg:max-w-[450px] ">
          <h2 className="font-clash font-semibold xl:text-[44px] md:text-[34px] text-[24px] capitalize tracking-[1px] text-white mb-10 lg:text-left text-center">
            help you find the best analysis for your business
          </h2>
          <div className="space-y-8">
            {benefits.map((item, index) => {
              return (
                <div key={index} className="flex space-x-6 ">
                  <Image src={item.icon} alt={item.alt} />
                  <div>
                    <h4 className="font-medium md:text-xl text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="font-poppins tracking-[2%] text-[#FFFFFFBF] lg:max-w-[397px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalysis;
