type Typography = {
  variant?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
  weight?: "regular" | "semi-bold" | "bold";
  style?: CSSProperties;
  classname?: string;
};

type PathName = {
  name: string;
  nombre: string;
  path: string;
};

type MainLayoutProps = {
  pathNames: PathName[];
};

type NavbarProps = {
  pathNames: PathName[];
};

type FooterProps = NavbarProps;

type Project = {
  title: string;
  description: string;
  url: string;
  img: string;
  technologies?: string[];
  features?: string[];
};
