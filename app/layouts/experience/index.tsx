import { css } from "@emotion/css";
import { H2 } from "~/components/typography/h2";
import { H3 } from "~/components/typography/h3";
import { H4 } from "~/components/typography/h4";
import { Paragraph } from "~/components/typography/paragraph";
import { ResponsiveContainer } from "~/components/container";
import { COLORS } from "~/constants/colors";

const experiences = [
  {
    company: "SHUTTLE IT CONSULTING",
    role: "Fullstack Developer",
    location: "Managua, Nicaragua",
    period: "February 2024 - Present",
    description:
      "Company that partners with clients for digital transformation, offering support to integrate innovative technologies.",
    achievements: [
      "Development of custom websites with responsive design, performance optimization, and SEO",
      "Development and optimization of a management and billing system for automotive workshops",
      "Collaboration in the development of a mobile application to integrate multiple purchasing platforms",
      "Work on mobile applications with React + Capacitor, updating dependencies, fixing issues, and implementing new features",
      "Participation in the development of React Native offline-first applications, optimizing synchronization between local and online databases",
    ],
    technologies: [
      "Angular",
      "Astro",
      "Remix",
      "Strapi",
      "React Native",
      "Expo",
      "Capacitor",
      "Redux",
      "Google Maps API",
      "WatermelonDB",
    ],
  },
  {
    company: "LICORERÍA COCIBOLCA",
    role: "Web Developer",
    location: "Granada, Nicaragua",
    period: "December 2021 - December 2023",
    description:
      "Liquor store dedicated to sales in Granada, Nicaragua.",
    achievements: [
      "Construction of an online product catalog",
      "Design of a complete billing and inventory system",
    ],
    technologies: ["Remix", "NestJS", "Supabase", "PostgreSQL"],
  },
];

export default function Experience() {
  const style = {
    container: css({
      padding: "80px 24px",
      "@media (min-width: 640px)": {
        padding: "120px 0",
      },
    }),

    title: css({
      textAlign: "center",
      marginBottom: "72px",
    }),

    experienceCard: css({
      backgroundColor: COLORS.primary.darker,
      borderRadius: "16px",
      padding: "32px",
      marginBottom: "32px",
      border: `1px solid ${COLORS.primary.dark}`,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: `0 8px 16px rgba(122, 162, 247, 0.2)`,
      },
    }),

    header: css({
      marginBottom: "24px",
    }),

    companyName: css({
      color: COLORS.primary.lightest,
      marginBottom: "8px",
    }),

    roleLocation: css({
      color: COLORS.accent.purple,
      marginBottom: "4px",
    }),

    period: css({
      color: COLORS.primary.light,
      fontSize: "14px",
    }),

    description: css({
      color: COLORS.primary.light,
      marginBottom: "24px",
      lineHeight: "1.6",
    }),

    achievementsList: css({
      marginBottom: "24px",
    }),

    achievementItem: css({
      color: COLORS.primary.lightest,
      marginBottom: "12px",
      paddingLeft: "20px",
      position: "relative",
      lineHeight: "1.6",
      "&::before": {
        content: '""',
        position: "absolute",
        left: "0",
        top: "8px",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: COLORS.accent.purple,
      },
    }),

    technologiesContainer: css({
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
    }),

    techBadge: css({
      backgroundColor: "rgba(122, 162, 247, 0.2)",
      color: COLORS.primary.lightest,
      padding: "6px 12px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      border: `1px solid ${COLORS.primary.dark}`,
    }),

    sectionTitle: css({
      color: COLORS.primary.lightest,
      marginBottom: "16px",
      fontSize: "18px",
      fontWeight: "600",
    }),
  };

  return (
    <ResponsiveContainer>
      <div id="experience" className={style.container}>
        <div className={style.title}>
          <H2 variant="5xl" weight="semi-bold">
            Professional Experience
          </H2>
        </div>

        {experiences.map((exp, idx) => (
          <div key={idx} className={style.experienceCard}>
            <div className={style.header}>
              <H3 variant="xl" weight="bold" classname={style.companyName}>
                {exp.company}
              </H3>
              <H4 variant="lg" weight="semi-bold" classname={style.roleLocation}>
                {exp.role} • {exp.location}
              </H4>
              <Paragraph variant="sm" classname={style.period}>
                {exp.period}
              </Paragraph>
            </div>

            <Paragraph variant="md" classname={style.description}>
              {exp.description}
            </Paragraph>

            <div className={style.achievementsList}>
              <Paragraph variant="md" weight="semi-bold" classname={style.sectionTitle}>
                Key Achievements:
              </Paragraph>
              {exp.achievements.map((achievement, aIdx) => (
                <Paragraph
                  key={aIdx}
                  variant="sm"
                  classname={style.achievementItem}
                >
                  {achievement}
                </Paragraph>
              ))}
            </div>

            <div>
              <Paragraph variant="md" weight="semi-bold" classname={style.sectionTitle}>
                Technologies:
              </Paragraph>
              <div className={style.technologiesContainer}>
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className={style.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  );
}
