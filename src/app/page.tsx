import BgGradient from "@/components/custom-ui/bg-gradien";
import { Contact } from "@/components/custom-ui/contact";
import { HomeBtn } from "@/components/custom-ui/home-btn";
import { OurService } from "@/components/custom-ui/our-service";
import MainLayout from "@/components/layout/main.layout";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-dvh  flex justify-center items-center relative bg-background">
        <div className="absolute h-full w-full flex justify-center items-center">
          <div className="relative w-[500px] h-[500px] sm:w-full sm:h-full">
            <StripedPattern
              className="text-black [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] stroke-[0.5] sm:stroke-1"
              width={20}
              height={40}
              x={10}
            />
          </div>
        </div>
        <BgGradient height={260} />
        <div className="flex flex-col items-center gap-4 z-10">
          <MainLayout>
            <div className="text-center z-10 flex flex-col items-center justify-center">
              <div className="w-[80px] h-[80px] sm:w-[300px] sm:h-[300px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px] text-white rounded-2xl">
                <Image
                  src="/assets/logo/spectrum-white.png"
                  alt="Spectrum Legal Solutions - International Law Firm in Phuket, Thailand"
                  width={300}
                  height={300}
                  quality={100}
                  priority
                  className="w-full h-full object-contain "
                />
              </div>
              <TextAnimate
                animation="blurInUp"
                by="character"
                duration={2}
                className="text-white font-medium text-xl sm:text-3xl lg:text-6xl my-3"
              >
                SPECTRUM LEGAL SOLUTIONS
              </TextAnimate>
              {/* <BlurFade delay={0.25} inView>
                <h2 className="text-white text-2xl mt-4 sm:mt-8 mb-6 font-light">
                  International Law Firm in Phuket, Thailand
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-2xl mx-auto p-3 sm:p-0 font-light">
                  Spectrum Legal Solutions is a modern law firm based in Phuket,
                  Thailand. We combine international standards with local
                  expertise to deliver clear, practical, and effective legal
                  services.
                </p>
              </BlurFade> */}
              <h2 className="text-white text-base sm:text-2xl mt-4 sm:mt-8 mb-6 font-light">
                International Law Firm in Phuket, Thailand
              </h2>
              <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-2xl mx-auto p-3 sm:p-0 font-light">
                Spectrum Legal Solutions is a modern law firm based in Phuket,
                Thailand. We combine international standards with local
                expertise to deliver clear, practical, and effective legal
                services.
              </p>
              <HomeBtn />
            </div>
          </MainLayout>
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center relative py-[120px]">
        <div className="z-0 overflow-hidden w-full h-full rounded-lg absolute">
          <FlickeringGrid
            className="relative inset-0 w-full h-full"
            // className="relative inset-0 z-0 [mask-image:radial-gradient(250px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#3a81f6"
            maxOpacity={0.2}
            flickerChance={0.1}
            style={{ zIndex: "0 !important" }}
            id="flickering-grid"
          />
        </div>
        <div
          id="our-service"
          className="w-full h-full flex flex-col justify-center items-center relative gap-10"
        >
          <div className="rounded-full overflow-hidden w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] ring-[4px] ring-background ring-offset-2">
            <Image
              src="/assets/profile/ceo.png"
              alt="CEO"
              quality={100}
              width={300}
              height={300}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <OurService />
        </div>
      </div>
      <div
        id="contact"
        className=" min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-background from-80% to-20% to-background py-[100px]"
      >
        <Contact />
        <BgGradient height={260} />
      </div>
    </div>
  );
}
