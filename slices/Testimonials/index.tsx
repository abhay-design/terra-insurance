import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import parse from "html-react-parser";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="text-[20px!important]">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl md:text-2xl font-normal leading-10 font-body text-slate-600 mb-4">
      {children}
    </p>
  ),
};

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials: FC<TestimonialsProps> = async ({ slice }) => {
  const client = createClient();

  // Type-safe access with fallback
  const group = isFilled.group(slice.primary.group) ? slice.primary.group : [];

  const testimonials = await Promise.all(
    group.map(async (item) => {
      if (
        isFilled.contentRelationship(item.textimonial) &&
        item.textimonial.uid
      ) {
        try {
          return await client.getByUID(
            "testimonials",
            item.textimonial.uid // Now definitely a string
          );
        } catch (error) {
          console.error("Error fetching testimonial:", error);
          return null;
        }
      }
      return null;
    })
  );

  const validTestimonials = testimonials.filter(Boolean);
  console.log(validTestimonials);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white testimonials"
    >
      <div className="wrapper max-w-[980px]">
        <PrismicRichText
          components={components}
          field={slice.primary.heading}
        />
        {validTestimonials.length > 0 && (
          <div className="testimonial-list">
            {validTestimonials.map((testimonial: any, index) => {
              // Convert rich text content to HTML string
              const contentHtml = testimonial.data.content
                ? testimonial.data.content
                    .map((item: any) => item.text)
                    .join("")
                : "";

              return (
                <div
                  key={index}
                  className="views-row pb-[10px!important] mb-[30px!important] border-b border-[#ccc]"
                >
                  <PrismicRichText
                    field={testimonial.data.heading}
                    components={components}
                  />
                  <div className="img-wrap">
                    <PrismicNextImage field={testimonial.data.image} />
                  </div>
                  {/* Use html-react-parser to render the HTML content */}
                  <div className="testimonial-content">
                    {parse(contentHtml)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;
