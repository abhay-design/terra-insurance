"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-[#fff] m-0 text-[22px] leading-[24px!important] font-thin">
      {children}
    </p>
  ),
};

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[460px] p-0 mt-[-95px!important] pb-[70px!important] hero flex items-end"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {slice.primary.group.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="wrapper w-full h-full flex flex-wrap items-end justify-center pb-[70px!important]">
              <div className="bg-img w-full h-full absolute top-0 left-0 z-[-1]">
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <div className="container">
                <div className="upper-div bg-[#ffffffd9] px-[20px!important] pt-[18px!important] pb-[14px!important] w-fit">
                  <PrismicRichText
                    field={item.heading}
                    components={components}
                  />
                </div>
                <div className="lower-div bg-[#00529c] px-[20px!important] pt-[13px!important] pb-[8px!important] w-fit">
                  <PrismicRichText
                    field={item.paragraph}
                    components={components}
                  />
                </div>
                <div className="btn-wrapper mt-[20px!important] flex flex-wrap">
                  <Button
                    field={item.btnlink}
                    className="pt-[7px!important] text-[13px] pr-[50px!important] pb-[4px!important] pl-[20px!important]"
                  >
                    {item.btntext}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Bounded>
  );
};

export default Hero;
