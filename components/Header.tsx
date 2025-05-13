import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header>
      <Link href={"/"}> {settings.data.site_title}</Link>

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
