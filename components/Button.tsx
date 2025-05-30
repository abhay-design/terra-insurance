import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "btn-blue  text-[#fff] font-thin inline-block relative uppercase  bg-[#00529c]",
        className
      )}
      {...restProps}
    />
  );
}
