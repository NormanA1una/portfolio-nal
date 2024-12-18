import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/svg+xml", href: "/img/favicon.svg" },
  {
    rel: "icon",
    type: "image/png",
    href: "/img/favicon-96x96.png",
    sizes: "96x96",
  },
];

export const meta: MetaFunction = () => [
  { title: "Norman's portfolio" },
  { name: "description", content: "Norman's portfolio" },
  { name: "author", content: "Norman" },
  { property: "og:title", content: "Norman's portfolio" },
  { property: "og:description", content: "Norman's portfolio" },
  /* { property: "og:image", content: "https://norman-portfolio.vercel.app/img/og.webp" },
  { property: "og:url", content: "https://norman-portfolio.vercel.app/" }, */
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "75px" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundColor: "#000000" }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
