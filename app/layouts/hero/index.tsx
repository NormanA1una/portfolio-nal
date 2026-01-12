import { css } from "@emotion/css";
import { H1 } from "~/components/typography/h1";
import { ResponsiveContainer } from "~/components/container";
import { Bio } from "~/components/bio";

export default function Hero() {
  const style = {
    container: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      padding: "120px 24px 0 24px",
      "@media (min-width: 640px)": {
        padding: "160px 0 0 0",
      },
    }),

    title: css({
      textAlign: "center",
      marginBottom: "48px",
      "@media (min-width: 640px)": {
        textAlign: "start",
      },
    }),
  };

  return (
    <ResponsiveContainer className={style.container}>
      <div className={style.title}>
        <H1 variant="7xl" weight="semi-bold">
          Fullstack Software Engineer
        </H1>
      </div>
      <Bio />
    </ResponsiveContainer>
  );
}
