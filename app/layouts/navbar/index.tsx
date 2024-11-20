import { css } from "@emotion/css";
import { Link, useNavigate } from "@remix-run/react";
import { Button } from "~/components/button";
import { Paragraph } from "~/components/typography/paragraph";
import { COLORS } from "~/constants/colors";
import { MobileNav } from "./mobile/mobile-nav";

export default function Navbar({ pathNames }: NavbarProps) {
  const navigate = useNavigate();

  const style = {
    container: css({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "70px",
      zIndex: 100,
      backgroundColor: COLORS.primary.darkest,
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${COLORS.primary.medium}, transparent)`,
        animation: "borderSlide 3s linear infinite",
      },
      "@media (min-width: 1024px)": {
        display: "flex",
      },
    }),

    list: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "72px",
    }),

    link: css({
      color: COLORS.primary.lightest,
      transition: "color 0.3s ease",
      "&:hover": {
        color: COLORS.primary.light,
      },
    }),
  };

  return (
    <>
      <nav className={style.container}>
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
          <li>
            <Button variant="primary" onClick={() => navigate("#contact")}>
              Contact
            </Button>
          </li>
        </ul>
      </nav>
      <MobileNav pathNames={pathNames} />
    </>
  );
}
