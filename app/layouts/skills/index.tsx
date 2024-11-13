import { css } from "@emotion/css";
import { Icons } from "~/components/icons";
import { H2 } from "~/components/typography/h2";
import { Paragraph } from "~/components/typography/paragraph";
import "~/styles/skills.css";
import { Button } from "~/components/button";

const frontendSkills = [
  {
    name: "HTML",
    icon: Icons.html,
  },
  {
    name: "Vue",
    icon: Icons.vue,
  },
  {
    name: "Angular",
    icon: Icons.angular,
  },
  {
    name: "Next.js",
    icon: Icons.nextjs,
  },
  {
    name: "Remix",
    icon: Icons.remix,
  },
  {
    name: "Astro",
    icon: Icons.astro,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: Icons.node,
  },
  {
    name: "Express",
    icon: Icons.express,
  },
  {
    name: "NestJS",
    icon: Icons.nestjs,
  },
];

const databaseSkills = [
  {
    name: "MongoDB",
    icon: Icons.mongoDb,
  },
  {
    name: "MySQL",
    icon: Icons.mySql,
  },
  {
    name: "PostgreSQL",
    icon: Icons.postgreSql,
  },
];

const toolsSkills = [
  {
    name: "Git",
    icon: Icons.git,
  },
  {
    name: "GitHub",
    icon: Icons.github,
  },
  {
    name: "LinkedIn",
    icon: Icons.linkedin,
  },
];

export default function Skills() {
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
      marginBottom: "48px",
    }),

    skillCard: css({
      display: "flex",
      alignItems: "center",
      gap: "16px",
      background: "#1a1a1a",
      padding: "12px 24px",
      borderRadius: "8px",
      position: "relative",
      zIndex: "1",
      margin: "2px",
    }),

    skillsContainer: css({
      display: "flex",
      gap: "72px",
      flexWrap: "wrap",
      justifyContent: "start",
      alignItems: "center",
    }),

    skillsMainContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "48px",
    }),

    skillDiv: css({
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }),
  };
  return (
    <div id="skills" className={style.container}>
      <div className={style.title}>
        <H2 variant="5xl" weight="semi-bold">
          Skills & Technologies
        </H2>
      </div>

      <div className={style.skillsMainContainer}>
        {/* Frontend Skills */}
        <div className={style.skillDiv}>
          <Paragraph variant="xl" weight="semi-bold">
            Frontend
          </Paragraph>
          <div className={style.skillsContainer}>
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="card example-2">
                <div className="inner">
                  <skill.icon width={60} height={60} />
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className={style.skillDiv}>
          <Paragraph variant="xl" weight="semi-bold">
            Backend
          </Paragraph>
          <div className={style.skillsContainer}>
            {backendSkills.map((skill) => (
              <div key={skill.name} className="card example-2">
                <div className="inner">
                  <skill.icon width={60} height={60} />
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div className={style.skillDiv}>
          <Paragraph variant="xl" weight="semi-bold">
            Database
          </Paragraph>
          <div className={style.skillsContainer}>
            {databaseSkills.map((skill) => (
              <div key={skill.name} className="card example-2">
                <div className="inner">
                  <skill.icon width={60} height={60} />
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Skills */}
        <div className={style.skillDiv}>
          <Paragraph variant="xl" weight="semi-bold">
            Tools
          </Paragraph>
          <div className={style.skillsContainer}>
            {toolsSkills.map((skill) => (
              <div key={skill.name} className="card example-2">
                <div className="inner">
                  <skill.icon width={60} height={60} />
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          marginTop: "48px",
        })}
      >
        <Paragraph
          variant="xl"
          weight="semi-bold"
          style={{ textAlign: "center" }}
        >
          Download my CV and take a look at my entire skill set
        </Paragraph>
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open("/files/CVFSV1.pdf", "_blank")}
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
