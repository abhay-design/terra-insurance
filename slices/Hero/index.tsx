import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
// import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

/**
 * Props for `Hero`.
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-[#fff] m-0 text-[22px] leading-[24px] font-thin">
      {children}
    </p>
  ),
};

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[460px] p-0 mt-[-95px!important] pb-[70px!important] hero flex  items-end"
    >
      <div className="bg-img w-full h-full absolute top-0 left-0 z-[-1]">
        <PrismicNextImage
          field={slice.primary.image}
          className="w-full h-full bg-no-repeat bg-cover"
        />
      </div>
      <div className="container">
        <div className="upper-div bg-[#ffffffd9] px-[20px!important] pt-[18px!important] pb-[14px!important] w-fit ">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
        </div>

        <div className="lower-div bg-[#00529c] px-[20px!important]  pt-[13px!important] pb-[8px!important] w-fit">
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>

        <div className="btn-wrapper mt-[20px!important]  flex flex-wrap ">
          <Button
            field={slice.primary.button_link}
            className="pt-[7px!important] text-[13px] pr-[50px!important] pb-[4px!important] pl-[20px!important]"
          >
            {slice.primary.button}
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
