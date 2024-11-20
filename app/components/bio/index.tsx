import { css } from "@emotion/css";
import { Paragraph } from "~/components/typography/paragraph";

export const Bio = () => {
  const style = css({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });

  return (
    <div id="sobre-mi" className={style}>
      <Paragraph variant="lg" weight="semi-bold">
        Hi! My name is Norman Aranda Luna, and I am a passionate full-stack
        developer.
      </Paragraph>
      <Paragraph variant="lg" weight="semi-bold">
        Being responsible, organized, friendly and hardworking, I have always
        left a positive impression on the projects I have participated in.
      </Paragraph>
      <Paragraph variant="lg" weight="semi-bold">
        What excites me most about being a developer are the daily challenges
        that drive us to think of creative and optimal solutions to solve those
        problems.
      </Paragraph>
    </div>
  );
};
