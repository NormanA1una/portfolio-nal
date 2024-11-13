import { css } from "@emotion/css";
import { Link } from "@remix-run/react";
import { Icons } from "~/components/icons";
import { H2 } from "~/components/typography/h2";
import { Paragraph } from "~/components/typography/paragraph";
import { COLORS } from "~/constants/colors";

export default function Footer({ pathNames }: FooterProps) {
  const style = {
    container: css({
      backgroundColor: COLORS.primary.darkest,
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "24px",
    }),

    list: css({
      display: "flex",
      gap: "48px",
    }),

    link: css({
      color: COLORS.primary.lightest,
      transition: "color 0.3s ease",
      "&:hover": {
        color: COLORS.primary.light,
      },
    }),

    icons: css({
      display: "flex",
      gap: "16px",
    }),

    iconLink: css({
      display: "block",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.2)",
      },
    }),
  };
  return (
    <footer className={style.container}>
      <H2 variant="xl" weight="semi-bold">
        Portfolio
      </H2>

      <ul className={style.list}>
        {pathNames.map((pathName) => (
          <li key={pathName.name}>
            <Link className={style.link} to={pathName.path}>
              <Paragraph variant="md" weight="semi-bold">
                {pathName.name}
              </Paragraph>
            </Link>
          </li>
        ))}
      </ul>

      <ul className={style.icons}>
        <li>
          <Link className={style.iconLink} to="www.linkedin.com/in/normanaluna">
            <Icons.linkedin />
          </Link>
        </li>
        <li>
          <Link className={style.iconLink} to="https://github.com/NormanA1una">
            <Icons.github />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
