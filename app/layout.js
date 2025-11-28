import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Google Fonts Optimization
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

// -----------------------------
// SEO + META CONFIG
// -----------------------------
export const metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.COM"),

  title: {
    default: "Vaachi Foundation",
    template: "%s | Vaachi Foundation",
  },

  description:
    "Vaachi Foundation — Performing arts, community upliftment, and cultural initiatives.",

  keywords: [
    "Vaachi Foundation",
    "performing arts",
    "culture",
    "community development",
    "foundation",
  ],

  authors: [{ name: "Vaachi Foundation" }],

  openGraph: {
    title: "Vaachi Foundation",
    description:
      "Vaachi Foundation — Performing arts & impactful community initiatives.",
    url: "https://vaachi.org",
    siteName: "Vaachi Foundation",
    images: [
      {
        url: "https://vaachi.org/images/donate.png",
        width: 1200,
        height: 630,
        alt: "Vaachi Foundation Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaachi Foundation",
    description: "Vaachi Foundation — performing arts & community upliftment.",
    images: ["https://vaachi.org/images/donate.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://vaachi.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for faster Google Font & Analytics loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DV0PPFDECD"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DV0PPFDECD');
      `,
          }}
        />

        {/* Example structured data (Modify as needed) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vaachi Foundation",
              url: "https://vaachi.org",
              logo: "https://vaachi.org/logo.png",
              description:
                "A foundation focused on performing arts and cultural upliftment.",
            }),
          }}
        />
      </head>

      <body className={`${nunito.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
