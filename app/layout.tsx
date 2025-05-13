import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient } from "@/prismicio";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "terra fallback",
    description:
      page.data.meta_description || "terra is best insurace site for you.",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(roboto.variable, robotoSerif.variable)}>
      <body>
        <header>header!</header>
        {children}
        <footer>footer!</footer>
      </body>
    </html>
  );
}
