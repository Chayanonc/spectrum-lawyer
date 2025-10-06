import Image from "next/image";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import React from "react";
import { services } from "@/constants/service.constant";

export const OurService = () => {
  return (
    <div className="sm:px-[50px] xl:px-[220px]">
      <section id="our-service" className="px-6 sm:px-0 space-y-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold uppercase bg-white rounded-full sm:px-2 lg:px-4">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
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
              <ul className="space-y-2 my-6 sm:my-10">
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
