import { css } from "@emotion/css";
import { H1 } from "~/components/typography/h1";
import { Paragraph } from "~/components/typography/paragraph";

export default function Hero() {
  const style = {
    container: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "160px",
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
    }),

    title: css({
      textAlign: "center",
      marginBottom: "48px",
    }),

    paragraphContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        <H1 variant="6xl" weight="semi-bold">
          Welcome to my portfolio
        </H1>
      </div>

      <div id="sobre-mi" className={style.paragraphContainer}>
        <Paragraph variant="lg" weight="semi-bold">
          Hello! My name is Norman Aranda Luna, and I am a passionate full-stack
          developer.
        </Paragraph>
        <Paragraph variant="lg" weight="semi-bold">
          Being responsible, organized, friendly, and hardworking, I have always
          left a positive impression on the projects I have participated in.
        </Paragraph>
        <Paragraph variant="lg" weight="semi-bold">
          What excites me most about being a developer are the daily challenges
          that push us to think of creative and optimal solutions to solve those
          problems.
        </Paragraph>
      </div>
    </div>
  );
}
