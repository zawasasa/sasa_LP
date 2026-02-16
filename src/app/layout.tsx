import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "@zawasasa | 教育現場のDXクリエイター",
  description:
    '小学校教員×プログラマー。GASやAIで現場の"困った"を解決。教育DX・業務効率化・組織開発を実践する人。',
  metadataBase: new URL("http://localhost:3000"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "@zawasasa | 教育現場のDXクリエイター",
    description:
      '小学校教員×プログラマー。GASやAIで現場の"困った"を解決。教育DX・業務効率化・組織開発を実践する人。',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sasa_logo_toka.png?v=2`,
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
      '小学校教員×プログラマー。GASやAIで現場の"困った"を解決。教育DX・業務効率化・組織開発を実践する人。',
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sasa_logo_toka.png?v=2`,
    ],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <a href="#hero" className="skip-link">
          メインへスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
