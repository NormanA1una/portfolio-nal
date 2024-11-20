import { css } from "@emotion/css";
import { H3 } from "~/components/typography/h3";
import { H6 } from "~/components/typography/h6";
import { Link } from "@remix-run/react";
import { Button } from "~/components/button";
import { projectCardStyles } from "../../styles/styles";

interface ProjectCardProps {
  project: Project;
  isOpen: boolean;
  showContent: boolean;
  onToggle: () => void;
}

export const ProjectCard = ({
  project,
  isOpen,
  showContent,
  onToggle,
}: ProjectCardProps) => {
  const styles = projectCardStyles();

  return (
    <div
      className={isOpen ? styles.projectCardOpen : styles.projectCardClose}
      style={{ backgroundImage: project.img }}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-label={`Ver proyecto ${project.title}`}
    >
      <div className={styles.overlay} />
      {isOpen ? (
        showContent && (
          <div className={styles.projectInfo}>
            <div
              className={styles.projectContent + (showContent ? " show" : "")}
            >
              <div
                className={css({
                  transition: "all 0.4s ease-out",
                  transform: showContent ? "translateY(0)" : "translateY(20px)",
                  opacity: showContent ? 1 : 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                })}
              >
                <H3 variant="lg" weight="bold" style={{ color: "#FCFCFC" }}>
                  {project.title}
                </H3>
                <H6 variant="sm" style={{ color: "#FCFCFC" }}>
                  {project.description}
                </H6>
              </div>
              <div
                className={css({
                  transition: "all 0.4s ease-out 0.1s",
                  transform: showContent ? "translateY(0)" : "translateY(20px)",
                  opacity: showContent ? 1 : 0,
                  marginTop: "12px",
                })}
              >
                <Button variant="primary">
                  <Link
                    to={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver sitio web
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )
      ) : (
        <div style={{ position: "relative", zIndex: 1 }}>
          <H3 variant="lg" weight="bold" classname={styles.projectTitle}>
            {project.title}
          </H3>
        </div>
      )}
    </div>
  );
};
