import { css } from "@emotion/css";
import { Link, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { COLORS } from "~/constants/colors";

export const MobileNav = ({ pathNames }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.body.classList.contains("overflow-hidden") && isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const style = {
    container: css({
      position: "relative",
      "@media (min-width: 1024px)": {
        display: "none",
      },
    }),

    closeButton: css({
      position: "fixed",
      top: "20px",
      right: "20px",
      zIndex: 200,
      background: "none",
      border: "none",
      padding: "12px",
      cursor: "pointer",
      width: "48px",
      height: "48px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),

    hamburgerLines: css({
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      "& div": {
        width: "24px",
        height: "2px",
        background: COLORS.primary.lightest,
        transition: "all 0.3s ease",
      },
      "&.active": {
        "& div:first-of-type": {
          transform: "rotate(45deg) translate(6px, 5px)",
        },
        "& div:nth-of-type(2)": {
          opacity: 0,
        },
        "& div:last-of-type": {
          transform: "rotate(-45deg) translate(6px, -6px)",
        },
      },
    }),

    menu: css({
      position: "fixed",
      top: 0,
      right: isMenuOpen ? 0 : "-100%",
      width: "100%",
      height: "100vh",
      backgroundColor: COLORS.primary.darkest,
      zIndex: 150,
      transition: "right 0.3s ease",
      padding: "80px 24px 24px 24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }),

    list: css({
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      width: "100%",
      maxWidth: "280px",
    }),

    menuItem: css({
      width: "100%",
      "& button": {
        width: "100%",
        background: `linear-gradient(45deg, ${COLORS.primary.darker}, ${COLORS.primary.darkest})`,
        border: `1px solid ${COLORS.primary.dark}`,
        borderRadius: "12px",
        padding: "16px",
        color: COLORS.primary.lightest,
        fontSize: "18px",
        transition: "all 0.3s ease",
        "&:hover": {
          background: `linear-gradient(45deg, ${COLORS.primary.dark}, ${COLORS.primary.darker})`,
          transform: "translateY(-2px)",
        },
      },
    }),

    blur: css({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(4px)",
      zIndex: 140,
      opacity: isMenuOpen ? 1 : 0,
      visibility: isMenuOpen ? "visible" : "hidden",
      transition: "all 0.3s ease",
    }),
  };

  return (
    <div className={style.container}>
      <button
        className={style.closeButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menú"
      >
        <div
          className={`${style.hamburgerLines} ${isMenuOpen ? "active" : ""}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      <div className={style.menu}>
        <ul className={style.list}>
          {pathNames.map((pathName) => (
            <li key={pathName.name} className={style.menuItem}>
              <Button
                variant="primary"
                size="2xl"
                onClick={() => {
                  navigate(pathName.path);
                  setIsMenuOpen(false);
                }}
              >
                {pathName.nombre}
              </Button>
            </li>
          ))}
          <li className={style.menuItem}>
            <Button
              variant="primary"
              size="2xl"
              onClick={() => {
                navigate("#contact");
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Button>
          </li>
        </ul>
      </div>

      <div className={style.blur} onClick={() => setIsMenuOpen(false)} />
    </div>
  );
};
