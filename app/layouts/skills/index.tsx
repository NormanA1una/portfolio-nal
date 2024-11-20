import { css } from "@emotion/css";
import { Icons } from "~/components/icons";
import { H2 } from "~/components/typography/h2";
import { Paragraph } from "~/components/typography/paragraph";
import { ResponsiveContainer } from "~/components/container";
import { Button } from "~/components/button";
import "~/styles/skills.css";

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

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: typeof frontendSkills;
}) => {
  const style = {
    skillDiv: css({
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }),
    skillsContainer: css({
      display: "flex",
      gap: "72px",
      flexWrap: "wrap",
      justifyContent: "start",
      alignItems: "center",
    }),
  };

  return (
    <div className={style.skillDiv}>
      <Paragraph variant="xl" weight="semi-bold">
        {title}
      </Paragraph>
      <div className={style.skillsContainer}>
        {skills.map((skill) => (
          <div key={skill.name} className="card example-2">
            <div className="inner">
              <skill.icon width={60} height={60} />
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const style = {
    title: css({
      textAlign: "center",
      marginBottom: "48px",
    }),
    skillsMainContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "48px",
    }),
  };

  return (
    <ResponsiveContainer>
      <div id="skills">
        <div className={style.title}>
          <H2 variant="5xl" weight="semi-bold">
            Skills and Technologies
          </H2>
        </div>

        <div className={style.skillsMainContainer}>
          <SkillSection title="Frontend" skills={frontendSkills} />
          <SkillSection title="Backend" skills={backendSkills} />
          <SkillSection title="Databases" skills={databaseSkills} />
          <SkillSection title="Tools" skills={toolsSkills} />
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
            Download my CV and check my complete skill set
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
    </ResponsiveContainer>
  );
}
