import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estética Premium | Clínica de Beleza e Rejuvenescimento",
  description:
    "Clínica de estética premium especializada em harmonização facial, botox, peeling e tratamentos avançados de rejuvenescimento. Agende sua avaliação gratuita.",
  keywords: [
    "clínica de estética",
    "harmonização facial",
    "botox",
    "peeling",
    "rejuvenescimento",
    "estética premium",
    "tratamentos faciais",
  ],
  openGraph: {
    title: "Estética Premium | Clínica de Beleza e Rejuvenescimento",
    description:
      "Clínica de estética premium especializada em harmonização facial, botox, peeling e tratamentos avançados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
