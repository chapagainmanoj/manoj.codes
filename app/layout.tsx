import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "manoj.codes",
    template: "%s | manoj.codes",
  },
  description: "Software Engineer: Codes for fun and living.",
  keywords: "Manoj Chapagain, full-stack developer, web developer, software engineer, Python developer, JavaScript developer, TypeScript, tech blog, developer portfolio, coding projects, North York developer, tech enthusiast, software projects, API development, web development, programming, coding, .py, .js, .tsx, .yaml, Git, open-source",
  openGraph: {
    title: "manoj.codes",
    description:
      "Welcome to the personal website of Manoj Chapagain, a passionate full-stack developer skilled in Python, JavaScript, TypeScript, and more. Software Engineer: Codes for fun and living. Explore my projects, blog, and get in touch to collaborate on innovative tech solutions!",
    url: "https://manoj.codes",
    siteName: "manoj.codes",
    images: [
      {
        url: "https://manoj.codes/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "__man0j",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
