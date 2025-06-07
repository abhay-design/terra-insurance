import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import parse from "html-react-parser";

export type BodyProps = SliceComponentProps<Content.BodySlice>;

const Body: FC<BodyProps> = ({ slice }) => {
  // Convert the rich text array to HTML string if needed
  const contentHtml = Array.isArray(slice.primary.bodyfield)
    ? slice.primary.bodyfield.map((item: any) => item.text).join("")
    : slice.primary.bodyfield;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white prose pt-[10px!important] pb-[40px!important]"
    >
      <div className="wrapper max-w-[980px]">{parse(contentHtml)}</div>
    </Bounded>
  );
};

export default Body;
