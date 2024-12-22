import Image from "next/image";
import React from "react";
import logo from "@/images/svgs/logo.svg";
import Link from "next/link";
import menu from "@/images/svgs/hamburger.svg";

const Header = () => {
  let NavItems = [
    {
      name: "Homepage",
      route: "/",
    },
    {
      name: "Features",
      route: "#",
    },
    {
      name: "Use Cases",
      route: "#",
    },
    {
      name: "Pricing",
      route: "#",
    },
    {
      name: "Blog",
      route: "#",
    },
  ];
  return (
    <header className="bg-[#051139]  py-8 ">
      <div className="flex justify-between items-center custom-container">
        <Image
          src={logo}
          alt="Logo"
          className="md:w-auto md:h-auto w-[130px] h-[41px]"
        />
        <nav className="lg:block hidden">
          <ul className="flex space-x-5 text-white">
            {NavItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    item.name === "Homepage" && "font-semibold"
                  } font-clash text-lg tracking-[0.36px] text-white`}
                >
                  <Link href={item.route}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="lg:block hidden px-7 py-[14px] bg-[#6A65FF] rounded-[10px] font-clash font-semibold text-lg text-white">
          <Link href={"#"}>Join The waitlist</Link>
        </button>
        <button className="lg:hidden block md:w-[50px] md:h-[50px] w-[30px] h-[30px]">
          <Image src={menu} alt="Menu" className="w-[30px] h-[30px]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
