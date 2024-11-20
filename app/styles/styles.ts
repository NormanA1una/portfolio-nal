import { css } from "@emotion/css";
import { COLORS } from "~/constants/colors";

export const projectCardStyles = () => ({
  projectCardClose: css({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
    position: "relative",
    display: "flex",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "scale(1)",
    height: "56px",
    width: "100%",
    backgroundSize: "cover",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    "@media (min-width: 1024px)": {
      height: "275px",
      width: "150px",
    },
    "@media (min-width: 1280px)": {
      height: "500px",
      width: "500px",
    },
    "&:hover": {
      transform: "scale(1.02)",
    },
  }),

  projectCardOpen: css({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    height: "275px",
    width: "100%",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "scale(1)",
    "@media (min-width: 1280px)": {
      height: "500px",
    },
  }),

  overlay: css({
    background: `${COLORS.primary.darkest}99`,
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    borderRadius: "8px",
  }),

  projectInfo: css({
    width: "100%",
    zIndex: 1,
  }),

  projectContent: css({
    background: `${COLORS.primary.darker}BB`,
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "16px 16px 36px 16px",
    width: "100%",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "all 0.4s ease-out",
    "&.show": {
      opacity: 1,
      transform: "translateY(0)",
    },
  }),

  projectTitle: css({
    color: COLORS.primary.lightest,
    fontWeight: 700,
    "@media (min-width: 1024px)": {
      transform: "rotate(-90deg)",
    },
  }),

  projectLink: css({
    color: "#FCFCFC",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#CE89FF",
    },
  }),
});
