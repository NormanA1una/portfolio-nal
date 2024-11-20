import { css } from "@emotion/css";
import { H2 } from "~/components/typography/h2";
import { useEffect, useState } from "react";
import { ResponsiveContainer } from "~/components/container";
import { ProjectCard } from "~/components/project-card";
import { PROJECTS } from "~/constants/constants";

export default function Projects() {
  const [projectOpenIndex, setProjectOpenIndex] = useState<number | null>(0);
  const [showContent, setShowContent] = useState(false);

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
    <ResponsiveContainer>
      <div id="projects">
        <div className={css({ textAlign: "center", marginBottom: "72px" })}>
          <H2 variant="5xl" weight="semi-bold">
            Proyectos
          </H2>
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            "@media (min-width: 1024px)": {
              flexDirection: "row",
            },
          })}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              isOpen={projectOpenIndex === i}
              showContent={showContent}
              onToggle={() => toggleProject(i)}
            />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
