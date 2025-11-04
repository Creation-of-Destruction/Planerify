"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { schools } from "@/data/schools";
import { useTranslations } from "next-intl";

export const SchoolsItems = () => {
  const t = useTranslations("homePage");
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);
  const [, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={
        "flex flex-col sm:max-w-lg sm:mx-auto mt-6 overflow-hidden  relative sm:text-center"
      }
    >
      <p className={"sm:text-center text-base md:text-base/relaxed "}>{t("usedSchools")}</p>
      <div>
        <Carousel
          opts={{ loop: schools.length > 1 }}
          plugins={schools.length > 1 ? [AutoScroll({ stopOnInteraction: false })] : []}
          setApi={setApi}
          className="w-full max-w-4xl justify-center items-center flex-col mx-auto py-9 relative"
        >
          {schools.length > 1 && (
            <>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
            </>
          )}
          <CarouselContent className="px-4">
            {schools.map((a, i) => (
              <CarouselItem key={i} className="basis-[180px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.alt}
                  title={a.title}
                  width={120}
                  height={120}
                  className="mx-auto aspect-square shrink-0 object-contain grayscale justify-center items-center flex dark:invert h-12"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
