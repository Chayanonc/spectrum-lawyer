import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spectrum Legal Solutions - International Law Firm in Phuket, Thailand",
    short_name: "Spectrum Legal",
    description:
      "International law firm based in Phuket, Thailand, providing comprehensive legal services including corporate law, international business, real estate, immigration, and cross-border legal matters for clients worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#002f59",
    icons: [
      {
        src: "/assets/favico/icon1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/favico/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/assets/favico/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    lang: "en",
    categories: ["business", "legal", "professional"],
  };
}
