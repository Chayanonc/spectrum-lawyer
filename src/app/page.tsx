import MainLayout from "@/components/layout/main.layout";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        {/* <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] text-white rounded-2xl bg-white">
          <Image
            src="/assets/logo/spectrum-logo.svg"
            alt="Spectrum Legal Solutions - International Law Firm in Phuket, Thailand"
            width={500}
            height={500}
            className="w-full h-full"
            priority
          />
        </div> */}
        <MainLayout>
          {/* <FlickeringGrid
            className="absolute inset-0 z-0 h-full w-full"
            squareSize={4}
            gridGap={6}
            color="#f47832"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={500}
            width={500}
          /> */}
          <div className="text-center z-10">
            <TextAnimate
              animation="blurInUp"
              by="character"
              duration={2}
              className="text-white font-medium text-xl sm:text-6xl"
            >
              SPECTRUM LEGAL SOLUTIONS
            </TextAnimate>
            <p className="text-white  sm:text-2xl mt-4 mb-6 font-light text-lg">
              COMING SOON
            </p>
            <h2 className="text-white text-2xl mt-4 mb-6 font-light">
              International Law Firm in Phuket, Thailand
            </h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-2xl mx-auto p-3 sm:p-0">
              Spectrum Legal Solutions is a modern law firm based in Phuket,
              Thailand. We combine international standards with local expertise
              to deliver clear, practical, and effective legal services.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="min-w-[200px] bg-[#f47832]">
                Get Consultation
              </Button>
              <Button
                variant="outline"
                className="min-w-[200px] text-white border-white hover:bg-white hover:text-black"
              >
                Our Services
              </Button>
            </div>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}
