import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

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

      <nav>
        <ul>
          {settings.data.navigation.map((item, index) => (
            <li key={index}>
              {item.link.map((link) => (
                <PrismicNextLink key={link.key} field={link} />
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
