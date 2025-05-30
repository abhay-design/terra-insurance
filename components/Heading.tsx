import clsx from "clsx";
type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        " ",
        size === "xl" &&
          "text-[32px] font-thin leading-[34px] uppercase text-[#20384c]",
        size === "lg" && "text-[32px] ",
        size === "md" &&
          "text-[18px] text-[#404040] capitalize leading-[24px] font-normal ",
        size === "sm" && "text-[32px] ",
        className
      )}
    >
      {children}
    </Comp>
  );
}
