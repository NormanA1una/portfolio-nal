import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import MainLayout from "~/layouts/main/main-layout";

export const loader: LoaderFunction = async () => {
  const NAV_PATHNAMES = [
    { name: "Home", nombre: "Home", path: "/" },
    { name: "About", nombre: "About", path: "/" },
    { name: "Skills", nombre: "Skills", path: "#skills" },
    { name: "Experience", nombre: "Experience", path: "#experience" },
    { name: "Projects", nombre: "Projects", path: "#projects" },
  ];

  return json({ NAV_PATHNAMES });
};

export default function Layout() {
  const { NAV_PATHNAMES } = useLoaderData<typeof loader>();
  return <MainLayout pathNames={NAV_PATHNAMES} />;
}
