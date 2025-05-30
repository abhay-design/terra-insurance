import { FC } from "react";
import { Content } from "@prismicio/client";
import Bounded from "@/components/Bounded";
import { PrismicRichText } from "@prismicio/react";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";

/**
 * Props for `ColThreeCards`.
 */
const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading as="h3" size="md" className="mb-[7px!important]">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-[#404040] mb-[10px!important] pb-[10px!important] text-[13px] font-normal leading-[18px] ">
      {children}
    </p>
  ),
};

export type ColThreeCardsProps =
  SliceComponentProps<Content.ColThreeCardsSlice>;

/**
 * Component for "ColThreeCards" Slices.
 */
const ColThreeCards: FC<ColThreeCardsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[34px!important] bg-[#fff]"
    >
      <div className="container">
        <div className="wrapper relative flex flex-wrap ml-[-10px!important] w-[calc(100%_+_20px)]">
          {slice.primary.cards.map((item, index) => (
            <div
              className="card relative w-[calc(33.33%_-_20px)] mx-[10p!important]"
              key={index}
            >
              <div className="card-wrap relative">
                <PrismicRichText field={item.heading} components={components} />
                {item.image && (
                  <div className="img-wrap max-w-full h-[98px] mb-[16px!important] relative">
                    <PrismicNextImage
                      field={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="subtitle">
                  {item.paragraph && (
                    <PrismicRichText
                      field={item.paragraph}
                      components={components}
                    />
                  )}
                  {item.links && item.links.length > 0 && (
                    <ul className="links mt-[12px!important] list-none">
                      {item.links.map((link) => (
                        <li key={link.key} className="mb-[7px!important]">
                          <PrismicNextLink
                            field={link}
                            className="pointer text-[#00529c] text-[12px] font-normal pr-[9px] relative"
                          >
                            {/* Add fallback text */}
                          </PrismicNextLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {item.btn && item.btn.link_type !== "Any" && (
                  <div className="btn-wrap">
                    <Button
                      field={item.btn}
                      className="btn-small text-[12px!important] pt-[6px!important] pr-[32px!important] pb-[5px!important] pl-[9px!important]"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ColThreeCards;
