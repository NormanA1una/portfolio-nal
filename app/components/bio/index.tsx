import { css } from "@emotion/css";
import { Paragraph } from "~/components/typography/paragraph";

export const Bio = () => {
  const style = css({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  });

  return (
    <div id="about-me" className={style}>
      <Paragraph variant="lg" weight="semi-bold">
        I am a Software Engineer who has significantly contributed to the
        implementation of new technologies and the development of applications
        for companies like Licorería Cocibolca and projects at Shuttle IT
        Consulting.
      </Paragraph>
      <Paragraph variant="lg" weight="semi-bold">
        I am adaptable, always willing to expand my knowledge, value teamwork,
        and am passionate about continuous improvement. I thrive on daily
        challenges that push me to think of creative and optimal solutions to
        solve complex problems.
      </Paragraph>
    </div>
  );
};
