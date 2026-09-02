import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://amelbenhazem.vercel.app"
  ),
  title: "Amel Ben Hazem | Ingénieure Cloud & DevOps",
  description:
    "Portfolio d'Amel Ben Hazem — Ingénieure en Génie Logiciel spécialisée en Cloud, DevOps, full-stack, conteneurisation et CI/CD. Diplômée Tekup, mention Très Bien.",
  keywords: [
    "Cloud",
    "DevOps",
    "Next.js",
    "Kubernetes",
    "Terraform",
    "Full-stack",
    "Amel Ben Hazem",
  ],
  authors: [{ name: "Amel Ben Hazem" }],
  openGraph: {
    title: "Amel Ben Hazem | Ingénieure Cloud & DevOps",
    description:
      "Ingénieure en Génie Logiciel spécialisée en Cloud & DevOps. Découvrez mes projets et compétences.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Amel Ben Hazem — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amel Ben Hazem | Ingénieure Cloud & DevOps",
    description:
      "Ingénieure en Génie Logiciel spécialisée en Cloud & DevOps.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function () {
    try {
      var theme = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (theme === "dark" || (!theme && prefersDark)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
