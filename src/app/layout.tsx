import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Spectrum Legal Solutions - International Law Firm in Phuket, Thailand",
  description:
    "Spectrum Legal Solutions is an international law firm based in Phuket, Thailand, providing comprehensive legal services including corporate law, international business, real estate, immigration, and cross-border legal matters for clients worldwide.",
  icons: {
    icon: [
      { url: "/assets/favico/favicon.ico", sizes: "any" },
      { url: "/assets/favico/icon1.png", type: "image/png" },
    ],
    apple: [{ url: "/assets/favico/apple-icon.png", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/assets/favico/icon0.svg",
        color: "#002f59",
      },
    ],
  },
  keywords: [
    "international law firm",
    "phuket lawyer",
    "thailand legal services",
    "international business law",
    "corporate law thailand",
    "real estate law phuket",
    "immigration lawyer thailand",
    "cross border legal",
    "foreign investment thailand",
    "legal consultation phuket",
    "ทนายความภูเก็ต",
    "ที่ปรึกษากฎหมายต่างประเทศ",
    "กฎหมายธุรกิจระหว่างประเทศ",
  ],
  authors: [{ name: "Spectrum Legal Solutions" }],
  creator: "Spectrum Legal Solutions",
  publisher: "Spectrum Legal Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spectrumlegal.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Spectrum Legal Solutions - International Law Firm in Phuket, Thailand",
    description:
      "Spectrum Legal Solutions is an international law firm based in Phuket, Thailand, providing comprehensive legal services for international clients and businesses.",
    url: "https://spectrumlegal.co",
    siteName: "Spectrum Legal Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/logo/spectrum-logo.svg",
        width: 1200,
        height: 630,
        alt: "Spectrum Legal Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Spectrum Legal Solutions - International Law Firm in Phuket, Thailand",
    description:
      "International law firm providing comprehensive legal services in Phuket, Thailand for global clients.",
    images: ["/assets/logo/spectrum-logo.svg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon meta tags */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/favico/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favico/icon1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favico/icon1.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favico/apple-icon.png"
        />
        <link rel="mask-icon" href="/assets/favico/icon0.svg" color="#002f59" />
        <meta name="msapplication-TileColor" content="#002f59" />
        <meta name="theme-color" content="#002f59" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Spectrum Legal Solutions",
              description:
                "Spectrum Legal Solutions is an international law firm based in Phuket, Thailand, providing comprehensive legal services including corporate law, international business, real estate, immigration, and cross-border legal matters for clients worldwide.",
              url: "https://spectrumlegal.co",
              logo: "https://spectrumlegal.co/assets/logo/spectrum-logo.svg",
              image: "https://spectrumlegal.co/assets/logo/spectrum-logo.svg",
              telephone: "+66-XX-XXX-XXXX",
              email: "info@spectrumlegal.co",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Phuket Town",
                addressLocality: "Phuket",
                addressRegion: "Phuket Province",
                postalCode: "83000",
                addressCountry: "TH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "7.8804",
                longitude: "98.3923",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              serviceArea: {
                "@type": "Country",
                name: "Thailand",
              },
              areaServed: {
                "@type": "Country",
                name: "Thailand",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "International Legal Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "International Business Law",
                      description:
                        "Cross-border business transactions, foreign investment, and international corporate law",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Real Estate Law",
                      description:
                        "Property transactions, land ownership, and real estate investment in Thailand",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Immigration Law",
                      description:
                        "Work permits, visas, residency, and immigration services for foreigners",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Corporate Law",
                      description:
                        "Company formation, corporate governance, and business compliance in Thailand",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/spectrumlegal",
                "https://www.linkedin.com/company/spectrum-legal-solutions",
              ],
            }),
          }}
        />
      </head>
      <body className={` ${montserrat.className}  antialiased `}>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-NQ2V44XS');
             `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQ2V44XS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Toaster />
      </body>
    </html>
  );
}
