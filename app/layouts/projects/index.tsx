import { css } from "@emotion/css";
import { H2 } from "~/components/typography/h2";
import { H3 } from "~/components/typography/h3";
import { H6 } from "~/components/typography/h6";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { COLORS } from "~/constants/colors";

const PROJECTS = [
  {
    title: "IMMIGRATIONS DOCS LLC",
    description:
      "Un sitio web enfocado en enviar documentos de inmigración para ser traducidos por expertos.",
    url: "https://immigrationdocsllc.com/",
    img: "url(/img/IDLLC.webp)",
  },
  {
    title: "TENNESSEE ROOTS TREE SERVICES",
    description:
      "Tennessee Roots Tree Services se dedica a proporcionar servicios profesionales de cuidado de árboles en Tennessee.",
    url: "https://www.tnrootstreecompany.com/",
    img: "url(/img/TNRTS.webp)",
  },
  {
    title: "SHUTTLE IT CONSULTING",
    description:
      "Proveedor de soluciones digitales que te ayuda a crear sitios web visualmente atractivos mientras aborda los desafíos empresariales.",
    url: "https://www.shuttleconsulting.com/",
    img: "url(/img/SHUTTLE.webp)",
  },
];

export default function Projects() {
  const [projectOpenIndex, setProjectOpenIndex] = useState<number | null>(0);
  const [showContent, setShowContent] = useState(false);

  const style = {
    container: css({
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
      marginBottom: "72px",
    }),

    projectsContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      "@media (min-width: 1024px)": {
        flexDirection: "row",
      },
    }),

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
  };

  const toggleProject = (index: number) => {
    if (projectOpenIndex === index) {
      setProjectOpenIndex(null);
    } else {
      setProjectOpenIndex(index);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (projectOpenIndex !== null) {
      timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
    } else {
      setShowContent(false);
    }

    return () => clearTimeout(timer);
  }, [projectOpenIndex]);

  return (
    <div id="projects" className={style.container}>
      <div>
        <H2 variant="5xl" weight="semi-bold" classname={style.title}>
          Proyectos
        </H2>
      </div>

      <div className={style.projectsContainer}>
        {PROJECTS.map((project, i) => {
          const isOpen = projectOpenIndex === i;

          return (
            <div
              key={i}
              className={
                isOpen ? style.projectCardOpen : style.projectCardClose
              }
              style={{ backgroundImage: project.img }}
              onClick={() => toggleProject(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleProject(i);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-label={`Ver proyecto ${project.title}`}
            >
              <div className={style.overlay} />
              {isOpen ? (
                showContent && (
                  <div className={style.projectInfo}>
                    <div
                      className={
                        style.projectContent + (showContent ? " show" : "")
                      }
                    >
                      <div
                        style={{
                          transition: "all 0.4s ease-out",
                          transform: showContent
                            ? "translateY(0)"
                            : "translateY(20px)",
                          opacity: showContent ? 1 : 0,
                        }}
                      >
                        <H3
                          variant="lg"
                          weight="bold"
                          style={{ color: "#FCFCFC" }}
                        >
                          {project.title}
                        </H3>
                        <H6 variant="sm" style={{ color: "#FCFCFC" }}>
                          {project.description}
                        </H6>
                      </div>
                      <div
                        style={{
                          transition: "all 0.4s ease-out 0.1s",
                          transform: showContent
                            ? "translateY(0)"
                            : "translateY(20px)",
                          opacity: showContent ? 1 : 0,
                        }}
                      >
                        <Link
                          to={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className={style.projectLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver sitio web
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <div style={{ position: "relative", zIndex: 1 }}>
                  <H3 variant="lg" weight="bold" classname={style.projectTitle}>
                    {project.title}
                  </H3>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
