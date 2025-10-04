import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    languages: {
      "th-TH": "/th",
      "en-US": "/en",
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      <body className={` ${montserrat.className}  antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
