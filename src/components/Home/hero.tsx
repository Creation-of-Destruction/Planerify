import { BorderBeam } from "@/components/ui/border-beam";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { SchoolsItems } from "@/components/schoolsItems";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { avatars } from "@/data/avatars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tech } from "@/components/tech";
import Image from "next/image";
import { GridPattern } from "@/components/ui/grid-pattern";

export const Hero = () => {
  const t = useTranslations("homePage");

  return (
    <section className={"relative bg-background "}>
      <div className="bg-background relative overflow-hidden flex size-full min-h-[300px] p-20">
        <div
          className={
            "absolute -left-[180px] top-32 rotate-45 bg-primary  w-[400px] z-20 h-[20px] blur-3xl rounded-full"
          }
        />
        <div
          className={
            "absolute left-[360px] -top-[60px] rotate-45 bg-primary md:flex hidden w-[100px]  z-20 h-[80px] blur-3xl rounded-full"
          }
        />
        <div
          className={
            "absolute -right-[180px] top-32 rotate-45 hidden sm:flex  bg-primary w-[300px] z-20 h-[20px] blur-3xl rounded-full"
          }
        />
        <div
          className={
            "absolute right-[360px] -top-[60px] rotate-45  bg-primary hidden lg:flex w-[100px]  z-20 h-[80px] blur-3xl rounded-full"
          }
        />
        <GridPattern
          width={100}
          height={100}
          x={-1}
          y={-1}
          className={"stroke-foreground/10 dark:stroke-foreground/3 z-[0]"}
        />
      </div>
      <div
        className={
          "container  relative top-[-170px] pt-[20px] sm:pt-[50px] max-w-4xl mx-auto  sm:items-center flex   px-6  flex-col sm:justify-center"
        }
      >
        <a
          href=""
          className="relative flex w-fit gap-2 border border-input backdrop-blur-2xl rounded-full px-2.5 py-1 text-primary"
        >
          <span className="bg-primary/25 text-primary font-bold text-xs uppercase px-2 py-0.5 rounded-full">
            {t("badge")}
          </span>

          <span className="text-foreground font-medium text-sm/relaxed">Planerify 1.0.0</span>

          <BorderBeam colorTo="text-primary" />
        </a>

        <h1
          className={
            "mt-6 max-w-5xl mx-auto sm:text-center relative sm:items-center sm:justify-center text-black font-bold text-4xl sm:text-5xl dark:text-white"
          }
        >
          <PointerHighlight
            rectangleClassName="bg-primary border-primary leading-loose"
            pointerClassName="text-foreground h-3 w-3"
            containerClassName="inline-block"
          >
            <span className="relative z-10 text-white">Planerify</span>
          </PointerHighlight>{" "}
          {t("title")}
        </h1>

        <p
          className={
            "mt-3 sm:mt-6 text-base/relaxed max-w-2xl mx-auto sm:text-center  sm:text-lg/relaxed"
          }
        >
          {t("description")}
        </p>

        <div className={"mt-6 flex flex-wrap gap-3"}>
          <a href={""} aria-label={"login"} className={"w-full sm:w-auto relative"}>
            <Button className={"cursor-pointer group w-full transition-all"}>
              {t("buttonsHero.login")}{" "}
              <ChevronRightIcon className={"group-hover:translate-x-0.5 duration-100 "} />
            </Button>
          </a>
          <a href={""} aria-label={"login"} className={"w-full sm:w-auto "}>
            <Button variant={"outline"} className={"cursor-pointer w-full group transition-all"}>
              {t("buttonsHero.demo")}
              <ChevronRightIcon className={"group-hover:translate-x-0.5 duration-100"} />
            </Button>
          </a>
        </div>
        <div
          className={
            "grid sm:grid-cols-2 sm:max-w-xl md:max-w-5xl gap-7 sm:gap-12 sm:mx-auto mt-6 sm:items-center sm:justify-center"
          }
        ></div>
        <SchoolsItems />
        <div
          className={
            "grid sm:grid-cols-2 sm:max-w-xl md:max-w-5xl gap-7 sm:gap-12 sm:mx-auto mt-6 sm:items-center sm:justify-center"
          }
        >
          <div className="flex flex-col sm:max-w-xs sm:mx-auto">
            <p className="mb-4 text-base/relaxed text-foreground">{t("team")}</p>
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <Avatar key={index} className="ring-muted-foreground size-12 ring-2">
                  <AvatarImage src={avatar.src} alt={avatar.name} />
                  <AvatarFallback>{avatar.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <div className="no-visible-scrollbar relative z-20 flex flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3">
            <Tech
              icon={
                <Image
                  src={"/next.svg"}
                  width={32}
                  height={32}
                  className="h-4 w-4  flex-shrink-0 dark:invert sm:h-10 sm:w-10"
                  alt={"Nextjs"}
                />
              }
              name={"Nextjs"}
            />
            <Tech
              icon={
                <Image
                  src={"/tailwind.svg"}
                  width={32}
                  height={32}
                  className="h-4 w-4   flex-shrink-0   sm:h-10 sm:w-10"
                  alt={"Tailwind"}
                />
              }
              name={"Tailwind"}
            />
            <Tech
              icon={
                <Image
                  src={"/typescript.svg"}
                  width={32}
                  height={32}
                  className="h-4 w-4   flex-shrink-0   sm:h-10 sm:w-10"
                  alt={"Tailwind"}
                />
              }
              name={"TypeScript"}
            />
          </div>
        </div>
        <div className={"relative"}>
          <div className="absolute inset-0 flex items-center justify-center sm:overflow-hidden  xl:overflow-visible">
            <div className="absolute top-[60%] w-[50vw] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[400px] md:h-[500px] bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl sm:blur-2xl rounded-full opacity-70" />
            <div className="absolute top-[40%] w-[80vw] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[400px] md:h-[500px] bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl sm:blur-2xl rounded-full opacity-60" />
            <div className="absolute top-[20%] w-[45vw] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[400px] md:h-[500px] bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl sm:blur-2xl rounded-full opacity-50" />
            <div className="absolute top-[70%] w-[100vw] sm:w-[900px] lg:w-[1200px] h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-b from-primary/50 via-transparent to-[#191919] blur-[100px] sm:blur-[140px] opacity-70" />
          </div>

          <div
            className={
              "relative mt-24 p-3 bg-black/5 dark:bg-white/5 border-input rounded-tr-3xl rounded-tl-3xl"
            }
          >
            <Image
              src={"/demo.png"}
              alt={"Demo PlanerifyApp"}
              width={2400}
              height={2400}
              className={"rounded-tr-3xl rounded-tl-3xl"}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-44 sm:bottom-52 left-0 w-full h-48 z-20
  bg-gradient-to-b from-transparent via-[#191919]/20 to-[#191919]"
      />
    </section>
  );
};
