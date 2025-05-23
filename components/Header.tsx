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
                  href="/"
                  className="home text-[#bebebe] text-[10px] font-bold pl-[23px!important]  relative mr-[11px!important]"
                >
                  Home
                </Link>
              </li>
              <li className="relative mr-[10px!important]">
                <Link
                  href="/contact-us"
                  className="tel text-[#bebebe] text-[10px] font-bold pl-[23px!important]  relative mr-[11px!important]"
                >
                  Call Us
                </Link>
              </li>
              <li className="relative mr-[10px!important]">
                <Link
                  href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=d9ec6978-6be4-e3b8-d589-ac5e88f472d6&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638745365803164402.a6563b02-d9aa-4eff-8378-154aca504c5c&state=JYzLboMwEEWh_ZZkR2LwA7xAlfoCRQkLikLCbmxIS2KLyhAQ_bZ-XC26OHNHRzPXdRzn0fJgcZEdTshwFBKKGY0Q9hkhKNgAowwLFHg1B_BIc7l4EQ4jz6cEJFBEJJWu_f11t90E2ycNrRq6u2nj_22FYWiMgRVBSxrzuZGdXveD9bG_Nk3dmkYORRdDmiOZHth-5mN9ynsRcLPXXFdaXaviEGQf9CoCNIry_Vu88FtVHieRqDvM3Hp_EjhT-x8-nEvV1wn3pb7x5TbNx12RfdXJcZb6TWWvz6g67eazpZqXzj8&sso_reload=true"
                  className="mail text-[#bebebe] text-[10px] font-bold pl-[23px!important] relative mr-[11px!important]"
                >
                  Email
                </Link>
              </li>
              <li className="relative mr-[10px!important]">
                <Link
                  href="/contact-us/apply-now"
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
              <Link href={"/"} className="emptyLink">
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
