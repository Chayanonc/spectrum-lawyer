import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spectrum Legal Solutions - Law Firm Phuket Thailand | ทนายความภูเก็ต",
    short_name: "Spectrum Legal Phuket",
    description:
      "Leading law firm in Phuket, Thailand. Expert legal services including corporate law, property law, work permits, visas, company registration, and business licensing. ทนายความภูเก็ต บริการกฎหมายครบวงจร",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#002f59",
    icons: [
      {
        src: "/assets/logo/spectrum-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/assets/logo/spectrum-blue.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo/spectrum-blue.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/favico/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    lang: "en",
    categories: ["business", "legal", "professional"],
  };
}
