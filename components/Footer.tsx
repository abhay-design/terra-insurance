import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="pt-[20px!important] pb-[30px!important] relative bg-[#333]">
      <div className="container">
        <div className="wrapper relative flex flex-wrap w-[calc(100%+30px)] ml-[-15px!important]">
          {settings.data.footer.map((item, index) => (
            <div
              key={index}
              className="col-six w-[calc(16.6%-30px)] mx-[15px!important] relative"
            >
              <ul className="relative list-none">
                <li className="mb-[8px] w-full">
                  <PrismicNextLink
                    field={item.link}
                    className="text-[#b5cb8b] uppercase font-thin text-[12px] transition-all duration-300 ease-in-out inline-block underline"
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
                {item.sublinks &&
                  item.sublinks.map((sublink, linkIndex) => (
                    <li key={linkIndex} className="mb-[8px] w-full">
                      <PrismicNextLink
                        field={sublink}
                        className="text-[#ccc] font-thin text-[12px] transition-all duration-300 ease-in-out inline-block hover:underline ml-2"
                      >
                        {item.label}
                      </PrismicNextLink>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="block-inner pt-[20px!important]">
          <div className="paragraph-wrap relative w-full">
            <p className="text-[#999] text-right text-[11px] font-normal">
              ©{new Date().getFullYear()} Terra Insurance Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
