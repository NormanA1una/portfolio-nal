import { Outlet } from "@remix-run/react";
import Navbar from "../navbar";
import Footer from "../footer";

export default function MainLayout({ pathNames }: MainLayoutProps) {
  return (
    <>
      <Navbar pathNames={pathNames} />
      <Outlet />
      <Footer pathNames={pathNames} />
    </>
  );
}
