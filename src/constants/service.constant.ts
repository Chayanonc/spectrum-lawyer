export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  details: string[];
}
export const services: ServiceItem[] = [
  {
    icon: "/assets/icons/corporate.svg",
    title: "Corporate Law",
    description:
      "We help you establish and operate your business with a strong legal foundation.",
    details: [
      "Company registration for Thai and foreign investors",
      "Corporate restructuring and share transfers",
      "Business compliance and legal due diligence",
      "Drafting and reviewing sale, service, and partnership agreements",
      "Business contracts and commercial transactions",
    ],
  },
  {
    icon: "/assets/icons/property.svg",
    title: "Property Law",
    description:
      "We guide clients through every legal aspect of buying, selling, or leasing property in Thailand.",
    details: [
      "Property due diligence and title deed verification",
      "Sale and purchase, lease, and villa agreements",
      "Condominium ownership and foreign buyer advice",
      "Land office registration and ownership transfer",
      "Legal structuring for real estate investment",
    ],
  },
  {
    icon: "/assets/icons/license.svg",
    title: "Business License",
    description:
      "We assist companies in obtaining all required business licenses and permits for lawful operations.",
    details: [
      "Foreign Business License (FBL)",
      "BOI (Board of Investment) application and support",
      "Restaurant, hotel, and tourism licenses",
      "Import/export, alcohol, and retail permits",
      "Renewal and compliance monitoring",
    ],
  },
  {
    icon: "/assets/icons/trademark.svg",
    title: "Intellectual Property Law",
    description:
      "We help you protect your ideas, brand, and creative assets in Thailand and abroad.",
    details: [
      "Trademark registration and renewal",
      "Copyright protection and enforcement",
      "Licensing and assignment agreements",
      "IP due diligence and brand protection strategy",
    ],
  },
  {
    icon: "/assets/icons/legal.svg",
    title: "Litigation & Dispute Resolution",
    description:
      "We represent and protect our clients' interests in disputes, negotiations, and court proceedings.",
    details: [
      "Civil, commercial, and contract disputes",
      "Property and construction litigation",
      "Debt recovery and enforcement",
      "Mediation and arbitration",
    ],
  },
  {
    icon: "/assets/icons/paper.svg",
    title: "Company Secretarial Work",
    description:
      "We ensure your company remains fully compliant with Thai corporate requirements.",
    details: [
      "Annual returns and compliance filings",
      "Updating corporate records and share structures",
      "Organizing board and shareholder meetings",
      "Preparing meeting minutes and resolutions",
      "Maintaining company registers",
    ],
  },
  {
    icon: "/assets/icons/caculate.svg",
    title: "Accounting & Payroll",
    description:
      "We provide reliable accounting and payroll services to meet your financial and tax obligations.",
    details: [
      "Monthly bookkeeping and financial reporting",
      "VAT, withholding tax, and corporate tax filings",
      "Payroll processing and social security submissions",
      "Annual audits and tax compliance",
    ],
  },
  {
    icon: "/assets/icons/idcard.svg",
    title: "Visa & Work Permit",
    description:
      "We handle all immigration and labor documentation for individuals and businesses.",
    details: [
      "Non-immigrant, business, and retirement visas",
      "Visa renewals and extensions",
      "Work permit applications and renewals",
      "BOI visa and work permit facilitation",
    ],
  },
];
