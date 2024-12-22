import React from "react";
import logo from "@/src/images/svgs/logo.svg";
import facebook from "@/src/images/svgs/facebook.svg";
import linkedin from "@/src/images/svgs/linkedin.svg";
import twitter from "@/src/images/svgs/twitter.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  let footer_nav = [
    {
      name: "Product",
      sub_item: [
        {
          name: "Landingpage",
          link: "#",
        },
        {
          name: "Features",
          link: "#",
        },
        {
          name: "Documentation",
          link: "#",
        },
        {
          name: "Referal Program",
          link: "#",
        },
        {
          name: "Pricing",
          link: "#",
        },
      ],
    },
    {
      name: "Services",
      sub_item: [
        {
          name: "Documentation",
          link: "#",
        },
        {
          name: "Designs",
          link: "#",
        },
        {
          name: "Themes",
          link: "#",
        },
        {
          name: "Illustrations",
          link: "#",
        },
        {
          name: "Ui Kit",
          link: "#",
        },
      ],
    },
    {
      name: "Company",
      sub_item: [
        {
          name: "About",
          link: "#",
        },
        {
          name: "Terms",
          link: "#",
        },
        {
          name: "Privacy Policy",
          link: "#",
        },
        {
          name: "Careers",
          link: "#",
        },
      ],
    },
    {
      name: "More",
      sub_item: [
        {
          name: "Documentation",
          link: "#",
        },
        {
          name: "Liscence",
          link: "#",
        },
        {
          name: "Changelog",
          link: "#",
        },
      ],
    },
  ];
  return (
    <footer className="bg-[#0D1849]">
      <div className=" custom-container flex lg:flex-row flex-col lg:items-center lg:justify-between py-[57px] ">
        <div className="lg:block flex flex-col items-center lg:mb-0 mb-14">
          <Image
            src={logo}
            alt="Logo"
            className="md:w-auto md:h-auto w-[130px] h-[41px] lg:mb-9 mb-5"
          />
          <div className="flex items-center space-x-4 lg:mb-9 mb-4">
            <Link href={"#"}>
              <Image src={twitter} alt="Twitter" />
            </Link>
            <Link href={"#"}>
              <Image src={facebook} alt="Facebook" />
            </Link>
            <Link href={"#"}>
              <Image src={linkedin} alt="Linkedin" />
            </Link>
          </div>
          <span className="text-xs text-white font-inter">
            © 2024 Orinix Reserved
          </span>
        </div>
        <nav aria-label="Footer">
          <ul className="grid md:grid-cols-4 grid-cols-2 md:gap-y-0 gap-y-4  xl:gap-x-[82px] lg:gap-x-[50px]">
            {footer_nav.map((item, index) => {
              return (
                <li key={index} className="lg:mx-0 mx-auto">
                  <span className="font-manrope text-white font-extrabold text-sm mb-4 block">
                    {item.name}
                  </span>
                  <ul>
                    {item.sub_item.map((sub_item, sub_index) => {
                      return (
                        <li key={sub_index} className="mb-3">
                          <a
                            href={sub_item.link}
                            className="font-inter text-sm text-[#FFFFFFBF]"
                          >
                            {sub_item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
