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
      paddingTop: "160px",
    }),

    title: css({
      textAlign: "start",
      marginBottom: "48px",
    }),
  };

  return (
    <ResponsiveContainer className={style.container}>
      <div className={style.title}>
        <H1 variant="7xl" weight="semi-bold">
          Welcome to my portfolio
        </H1>
      </div>
      <Bio />
    </ResponsiveContainer>
  );
}
