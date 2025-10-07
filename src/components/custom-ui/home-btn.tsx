"use client";
import { Button } from "../ui/button";

export const HomeBtn = () => {
  return (
    <div className="flex-col sm:flex-row flex gap-4 justify-center flex-wrap">
      <Button
        className="min-w-[200px] bg-[#f47832]"
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Get Consultation
      </Button>
      <Button
        variant="outline"
        className="min-w-[200px] text-white border-white hover:bg-white hover:text-black"
        onClick={() =>
          document
            .getElementById("our-service")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Our Services
      </Button>
    </div>
  );
};
