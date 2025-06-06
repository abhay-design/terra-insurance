import { FC } from "react";
import { Content } from "@prismicio/client";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `BannerSecond`.
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl">
      {children}
    </Heading>
  ),
};

export type BannerSecondProps = SliceComponentProps<Content.BannerSecondSlice>;

/**
 * Component for "BannerSecond" Slices.
 */
const BannerSecond: FC<BannerSecondProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center min-h-[330px] mt-[-95px!important] banner-second"
    >
      <div className="bg-img w-full h-full absolute left-0 top-0 z-0">
        <PrismicNextImage
          field={slice.primary.image}
          className="h-full w-full object-top object-cover"
        />
      </div>
      <div className="container">
        <div className="wrapper w-full relative mt-[80px!important]">
          <div className="heading-wrapper px-[20px!important] pt-[18px!important] pb-[14px!important] bg-[#ffffffd9] inline-block">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default BannerSecond;
