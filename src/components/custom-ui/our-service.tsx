import { Button } from "@/components/ui/button";
import Image from "next/image";
import MainLayout from "../layout/main.layout";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import React from "react";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  details: string[];
}
const services: ServiceItem[] = [
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

export const OurService = () => {
  return (
    <div className="sm:px-[230px]">
      <section className="px-10 sm:px-0 space-y-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold uppercase bg-white rounded-full sm:px-4">
            <AnimatedShinyText className="text-primary/90">
              Our <span className="text-background/80">Legal Services</span>
            </AnimatedShinyText>
          </h2>
          {/* <p className="text-base text-black sm:text-xl max-w-3xl mx-auto leading-relaxed p-3">
            Comprehensive legal solutions for international clients and
            businesses in Thailand. Our experienced team provides expert
            guidance across all areas of Thai and international law.
          </p> */}
        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative z-20 bg-background border border-white p-4 sm:p-2 sm:px-4 hover:border-background/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 "
            >
              <div className="flex justify-center py-2 sm:py-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-3 group-hover:text-primary/80 transition-colors duration-300 uppercase  text-center">
                {service.title}
              </h3>

              {/* <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p> */}
              <ul className="space-y-2 my-3 sm:my-10">
                {service.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-center text-xs leading-relaxed text-white"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="h-full w-full absolute inset-0 bg-gradient-to-br from-background/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
