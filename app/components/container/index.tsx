import { css } from "@emotion/css";
import { FC, PropsWithChildren } from "react";

type ResponsiveContainerProps = {
  className?: string;
};

export const ResponsiveContainer: FC<
  PropsWithChildren & ResponsiveContainerProps
> = ({ children, className }) => {
  const style = css({
    margin: "0 auto 160px auto",
    width: "100%",
    "@media (min-width: 640px)": {
      maxWidth: "640px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "768px",
    },
    "@media (min-width: 1024px)": {
      maxWidth: "1024px",
    },
    "@media (min-width: 1280px)": {
      maxWidth: "1280px",
    },
    "@media (min-width: 1536px)": {
      maxWidth: "1536px",
    },
  });

  return <div className={`${style} ${className || ""}`}>{children}</div>;
};
