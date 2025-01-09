import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/Logo.svg";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "Ali Studio | %s",
    default: "Ali Studio | Agencia Digital Creativa",
  },
  description:
    "Ali Studio es una agencia digital que ofrece servicios de desarrollo web, diseño gráfico y gestión de redes sociales. Creamos experiencias digitales únicas para potenciar tu marca.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://www.instagram.com/alistudiord/?hl=es"),
  openGraph: {
    title: "Ali Studio | Agencia Digital Creativa",
    siteName: "Ali Studio",
    description:
      "Ali Studio ofrece soluciones creativas en desarrollo web, diseño gráfico y social media. Transformamos ideas en experiencias digitales impactantes.",
    url: "",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Ali Studio | Agencia Digital Creativa",
      },
    ],
  },
  twitter: {
    title: "Ali Studio | Agencia Digital Creativa",
    creator: "",
    site: "",
    description:
      "Ali Studio es una agencia digital especializada en desarrollo web, diseño gráfico y gestión de redes sociales. Damos vida a tus ideas.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Ali Studio | Agencia Digital Creativa",
      },
    ],
  },
  alternates: {
    canonical: "",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
