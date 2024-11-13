import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import MainLayout from "~/layouts/main/main-layout";

export const loader: LoaderFunction = async () => {
  const NAV_PATHNAMES = [
    { name: "Home", nombre: "Inicio", path: "/" },
    { name: "About", nombre: "Sobre mí", path: "/" },
    { name: "Skills", nombre: "Habilidades", path: "#skills" },
    { name: "Projects", nombre: "Proyectos", path: "#projects" },
  ];

  return json({ NAV_PATHNAMES });
};

export default function Layout() {
  const { NAV_PATHNAMES } = useLoaderData<typeof loader>();
  return <MainLayout pathNames={NAV_PATHNAMES} />;
}
