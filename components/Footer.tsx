import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  console.log(settings.data.footer);

  return (
    <footer className="pt-[20px!important] pb-[30px!important] relative bg-[#333]">
      <div className="container">
        <div className="wrapper relative flex flex-wrap w-[calc(100%+30px)] ml-[-15px!important]">
          <div className="col-six w-[calc(16.6%-30px)] mx-[15px!important] relative">
            <ul className="relative list-none">
              {settings.data.footer.map((item, index) => (
                <li key={index} className="mb-[8px] w-full">
                  <PrismicNextLink
                    field={item.link}
                    className="text-[#ccc] font-thin text-[12px] transition-all duration-300 ease-in-out inline-block hover:underline"
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="block-inner pt-[20px!important]">
          <div className="paragraph-wrap relative w-full">
            <p className="text-[#999] text-right text-[11px] font-normal">
              ©{new Date().getFullYear()}
              Terra Insurance Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
