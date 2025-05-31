import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Breadcrumbs`.
 */
export type BreadcrumbsProps = SliceComponentProps<Content.BreadcrumbsSlice>;

/**
 * Component for "Breadcrumbs" Slices.
 */
const Breadcrumbs: FC<BreadcrumbsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded className="breadcrumbs pt-[20px!important] pb-[30px!important]  bg-[#fff]">
        <div className="wrapper  max-w-[980px]">
          {" "}
          <ol className="relative flex flex-wrap items-centerjustify-center list-none">
            {slice.primary.links?.map((link, index) => (
              <li key={index} className="text-[11px] font-normal">
                {" "}
                <PrismicNextLink
                  key={link.key}
                  field={link}
                  className="text-[11px] font-normal pr-[10px!important] mr-[6px!important] text-[#00529c] breadcrumbs-list"
                />
                {index < slice.primary.links.length - 1 && (
                  <span className="">/</span>
                )}
              </li>
            ))}
            {slice.primary.text && (
              <li className="text-[11px] font-normal">
                <span>{slice.primary.text}</span>
              </li>
            )}
          </ol>
        </div>
      </Bounded>
    </section>
  );
};

export default Breadcrumbs;
