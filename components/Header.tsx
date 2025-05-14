import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";

async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header>
      {/* <Link href={"/"}> {settings.data.site_title}</Link> */}
      <div className="top-nav py-[7px!important]">
        <div className="container">
          <div className="menu-block relative flex flex-wrap items-center justify-end">
            <ul className="flex flex-wrap list-none">
              <li className="relative mr-[10px!important]">
                <Link
                  href="#"
                  className="home text-[#bebebe] text-[10px] font-bold pl-[23px!important]  relative mr-[11px!important]"
                >
                  Home
                </Link>
              </li>
              <li className="relative mr-[10px!important]">
                <Link
                  href="#"
                  className="tel text-[#bebebe] text-[10px] font-bold pl-[23px!important]  relative mr-[11px!important]"
                >
                  Call Us
                </Link>
              </li>
              <li className="relative mr-[10px!important]">
                <Link
                  href="#"
                  className="mail text-[#bebebe] text-[10px] font-bold pl-[23px!important] relative mr-[11px!important]"
                >
                  Email
                </Link>
              </li>
              <li className="relative mr-[10px!important]">
                <Link
                  href="#"
                  className="apply text-[#bebebe] text-[10px] font-bold pl-[23px!important] relative mr-[11px!important]"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
            <div className="block-user-login relative">
              <ul className="list-none">
                <li className="mr-[10px!important] relative">
                  <Link
                    href={"#"}
                    className="login text-[#bebebe] text-[10px] font-bold pl-[23px!important]  relative mr-[11px!important]"
                  >
                    Insured Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block-search-form relative">
              <form className="w-full relative">
                <label htmlFor="search-box"></label>
                <input
                  type="text"
                  id="search-box"
                  placeholder="search"
                  className="py-[6px!important] pl-[6px!important] pr-[30px!important] text-[12px] bg-[#fff] w-[155px] h-[26px] outline:none"
                />
                <span className="btn-search"></span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav relative bg-[#eceae9e6]">
        <div className="container">
          <div className="wrapper w-full relative flex flex-wrap items-center justify-between">
            <div className="logo-wrap relative max-w-[184px] w-full my-[20px!important]">
              <Link href={"#"} className="emptyLink">
                .
              </Link>
              <Image
                src={"/icon/terra_insurance_logo.svg"}
                alt="img"
                width={184}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="desktop-nav relative">
              <ul className="flex flex-wrap items-center h-[92px]">
                {settings.data.navigation.map((item, index) => (
                  <li
                    key={index}
                    className="h-full ml-[8px] flex items-center relative"
                  >
                    <PrismicNextLink
                      field={item.link}
                      className="text-[13px] px-[10px!important] pt-[53px!important] pb-[20px] text-[#333] relative uppercase"
                    >
                      {item.label}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
