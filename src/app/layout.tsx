import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@zawasasa | 教育現場のDXクリエイター",
  description:
    "小学校教員×プログラマー。GASやAIで現場の“困った”を解決。教育DX・業務効率化・組織開発を実践する人。",
  metadataBase: new URL("http://localhost:3000"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "@zawasasa | 教育現場のDXクリエイター",
    description:
      "小学校教員×プログラマー。GASやAIで現場の“困った”を解決。教育DX・業務効率化・組織開発を実践する人。",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sasa_logo_toka.png?v=2`,
        width: 512,
        height: 512,
        alt: "@zawasasa avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "@zawasasa | 教育現場のDXクリエイター",
    description:
      "小学校教員×プログラマー。GASやAIで現場の“困った”を解決。教育DX・業務効率化・組織開発を実践する人。",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sasa_logo_toka.png?v=2`],
    creator: "@zawasasa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d6efd" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#hero" className="visually-hidden-focusable btn btn-light position-absolute m-2">メインへスキップ</a>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
