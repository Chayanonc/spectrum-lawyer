import { Button } from "@/components/ui/button";
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
      <section className="px-10 space-y-10">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center text-white">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold ">
              Contact <span className="">Us</span>
            </h2>
          </div>
          <p className="text-sm sm:text-xl max-w-3xl mx-auto leading-relaxed p-3 text-white/80">
            Ready to start your legal journey? Get in touch with our experienced
            team for a confidential consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Get In Touch
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                Our international law firm in Phuket is here to provide expert
                legal guidance. Contact us today for a consultation tailored to
                your specific needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Office Location
                  </h4>
                  <p className="text-white/70">Phuket Town, Phuket Province</p>
                  <p className="text-white/70">Thailand 83000</p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneLogo />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <a href="tel:+66887683036" className="text-white/70">
                    <p className="text-white/70">+66 88 768 3036</p>
                  </a>
                  {/* <p className="text-white/70">Mon-Fri: 9:00 AM - 6:00 PM</p> */}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <WhatsAppLogo />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                  <a
                    href="https://wa.me/66887683036"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 flex items-center gap-2"
                  >
                    +66 88 768 3036
                    <span>
                      <SquareArrowOutUpRight className="size-4" />
                    </span>
                  </a>
                  <div className="py-2">
                    <Image
                      src="/assets/qrcode/whatsapp.png"
                      alt="WhatsApp"
                      width={80}
                      height={80}
                      className="rounded-md border-2 border-white/20"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EmailSvg />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  {/* <p className="text-white/70">info@spectrumlegal.co</p> */}
                  <a href="mailto:piyaporn.t@spectrumlegal.co">
                    <p className="text-white/70">piyaporn.t@spectrumlegal.co</p>
                  </a>
                </div>
              </div>
            </div>
            {/* Social Links */}
            {/* <div className="pt-6 border-t border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/66887683036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"

                >
                  <svg
                    className="w-5 h-5  text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
          <ContactForm />

          {/* Contact Form */}
          {/* <div className="bg-background border border-white p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="+66 XX XXX XXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="" className="bg-background text-white">
                    Select a service
                  </option>
                  <option
                    value="corporate-law"
                    className="bg-background text-white"
                  >
                    Corporate Law
                  </option>
                  <option
                    value="property-law"
                    className="bg-background text-white"
                  >
                    Property Law
                  </option>
                  <option
                    value="business-license"
                    className="bg-background text-white"
                  >
                    Business License
                  </option>
                  <option
                    value="intellectual-property"
                    className="bg-background text-white"
                  >
                    Intellectual Property
                  </option>
                  <option
                    value="litigation"
                    className="bg-background text-white"
                  >
                    Litigation & Dispute Resolution
                  </option>
                  <option
                    value="company-secretarial"
                    className="bg-background text-white"
                  >
                    Company Secretarial
                  </option>
                  <option
                    value="accounting-payroll"
                    className="bg-background text-white"
                  >
                    Accounting & Payroll
                  </option>
                  <option
                    value="visa-work-permit"
                    className="bg-background text-white"
                  >
                    Visa & Work Permit
                  </option>
                  <option value="other" className="bg-background text-white">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Please describe your legal needs and any specific questions you have..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 text-primary bg-white/5 border-white/20 rounded focus:ring-primary focus:ring-2"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-white/70 leading-relaxed"
                >
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to Spectrum Legal Solutions contacting me
                  regarding my inquiry. *
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-medium"
              >
                Send Message
              </Button>
            </form>
          </div> */}
        </div>

        {/* Additional Info */}
        {/* <div className="text-center pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm">
            <strong>Response Time:</strong> We typically respond to all
            inquiries within 24 hours during business days.
          </p>
          <p className="text-white/70 text-sm mt-2">
            <strong>Confidentiality:</strong> All communications are strictly
            confidential and protected by attorney-client privilege.
          </p>
        </div> */}
      </section>
    </MainLayout>
  );
};
