import { css } from "@emotion/css";
import { Icons, PlaceholderIcon } from "~/components/icons";
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
    name: "React",
    icon: Icons.react,
  },
  {
    name: "TypeScript",
    icon: Icons.typescript,
  },
  {
    name: "TailwindCSS",
    icon: Icons.tailwind,
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
  {
    name: "React Hook Form",
    icon: Icons.reactHookForm,
  },
];

const mobileSkills = [
  {
    name: "React Native",
    icon: Icons.reactNative,
  },
  {
    name: "React Native Expo",
    icon: Icons.expo,
  },
  {
    name: "Capacitor",
    icon: Icons.capacitor,
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
  {
    name: "Supabase",
    icon: Icons.supabase,
  },
];

const stateManagementSkills = [
  {
    name: "Redux",
    icon: Icons.redux,
  },
  {
    name: "Zustand",
    icon: Icons.zustand,
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
  {
    name: "Clerk",
    icon: Icons.clerk,
  },
  {
    name: "Vercel",
    icon: Icons.vercel,
  },
  {
    name: "Supabase",
    icon: Icons.supabase,
  },
  {
    name: "Postman",
    icon: Icons.postman,
  },
  {
    name: "Strapi",
    icon: Icons.strapi,
  },
  {
    name: "AWS",
    icon: Icons.aws,
  },
  {
    name: "Terraform",
    icon: Icons.terraform,
  },
  {
    name: "Serverless",
    icon: Icons.serverless,
  },
];

const apiSkills = [
  {
    name: "Google Cloud",
    icon: Icons.googleCloud,
  },
  {
    name: "Shopify API",
    icon: Icons.shopify,
  },
  {
    name: "Twilio",
    icon: Icons.twilio,
  },
  {
    name: "Airtable API",
    icon: Icons.airtable,
  },
  {
    name: "Luma API",
    icon: Icons.luma,
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
      justifyContent: "center",
      alignItems: "center",
      "@media (min-width: 640px)": {
        justifyContent: "start",
      },
    }),
    title: css({
      textAlign: "center",
      marginBottom: "16px",
      "@media (min-width: 640px)": {
        textAlign: "start",
      },
    }),
  };

  return (
    <div className={style.skillDiv}>
      <div className={style.title}>
        <Paragraph variant="xl" weight="semi-bold">
          {title}
        </Paragraph>
      </div>
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
      padding: "0 24px",
      "@media (min-width: 640px)": {
        padding: "0 0",
      },
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
          <SkillSection title="Mobile" skills={mobileSkills} />
          <SkillSection title="Backend" skills={backendSkills} />
          <SkillSection title="Databases" skills={databaseSkills} />
          <SkillSection
            title="State Management"
            skills={stateManagementSkills}
          />
          <SkillSection title="Tools & Services" skills={toolsSkills} />
          <SkillSection title="APIs" skills={apiSkills} />
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            marginTop: "120px",
            padding: "0 24px",
            "@media (min-width: 640px)": {
              padding: "0 0",
            },
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
            onClick={() => window.open("/files/NormanResume.pdf", "_blank")}
          >
            Download CV
          </Button>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
