import { FC } from "react";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Props for `Testimonials`.
 */
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

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  console.log(slice.primary);
  // const client = createClient();

  // const testimonials = await Promise.all(slice.primary.map((items) => {
  //   if(
  //     isFilled.contentRelationship(items.testimonials) && items.testimonials.uid
  //   )
  // }));

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#fff]"
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
    </Bounded>
  );
};

export default Testimonials;
