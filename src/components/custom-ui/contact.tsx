import MainLayout from "../layout/main.layout";
import React from "react";
import Image from "next/image";
import { ContactForm } from "../form/contact";
import { PhoneLogo } from "../logo/phone-logo";
import { WhatsAppLogo } from "../logo/whatsapp-logo";
import { EmailSvg } from "../logo/email-logo";
import { SquareArrowOutUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <MainLayout>
      <section id="contact" className="z-20 space-y-8 sm:space-y-10 md:space-y-12 px-8 sm:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold px-4">
              Contact <span className="">Us</span>
            </h2>
          </div>
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-4xl mx-auto leading-relaxed px-4 text-white/80">
            Ready to start your legal journey? Get in touch with our experienced
            team for a confidential consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 md:mb-6">
                Get In Touch
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-6 sm:mb-8">
                Our international law firm in Phuket is here to provide expert
                legal guidance. Contact us today for a consultation tailored to
                your specific needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneLogo />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Phone
                  </h4>
                  <a href="tel:+66887683036" className="text-white/70">
                    <p className="text-sm sm:text-base text-white/70">
                      +66 88 768 3036
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <WhatsAppLogo />
                </div>
                <div className="flex flex-col space-y-0">
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/66887683036"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 flex items-center gap-2"
                  >
                    <span className="text-sm sm:text-base">
                      +66 88 768 3036
                    </span>
                    <span>
                      <SquareArrowOutUpRight className="size-3 sm:size-4" />
                    </span>
                  </a>
                  <div className="py-2">
                    <Image
                      src="/assets/qrcode/whatsapp.png"
                      alt="WhatsApp"
                      width={60}
                      height={60}
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-md border-2 border-white/20"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EmailSvg />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Email
                  </h4>
                  <a href="mailto:piyaporn.t@spectrumlegal.co">
                    <p className="text-sm sm:text-base text-white/70 break-all">
                      piyaporn.t@spectrumlegal.co
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};
