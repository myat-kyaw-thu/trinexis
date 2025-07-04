import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full bg-gradient-radial from-[#e6f0ed] via-[#d9e8e4] to-[#b0d0c8] dark:from-[#00463b] dark:via-[#00342f] dark:to-[#002623] rounded-b-xl"></div>
        </div>

        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-[#d9e8e4] dark:border-[#00342f] bg-[#e6f0ed] dark:bg-[#00463b] rounded-full text-sm h-8 px-3 flex items-center gap-2 text-[#005c4a] dark:text-[#b0d0c8]">
            {hero.badgeIcon}
            {hero.badge}
          </p>

          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-[#005c4a] dark:text-[#e6f0ed]">
              {hero.title}
            </h1>
            <p className="text-base md:text-lg text-center text-[#005c46]/80 dark:text-[#b0d0c8]/80 font-medium text-balance leading-relaxed tracking-tight">
              {hero.description}
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href={hero.cta.primary.href}
              className="bg-[#005c4a] hover:bg-[#005236] active:bg-[#00463b] dark:bg-[#005c46] dark:hover:bg-[#005c4a] dark:active:bg-[#005236] h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-full text-white w-32 px-4 border border-[#005236]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out"
            >
              {hero.cta.primary.text}
            </Link>
            <Link
              href={hero.cta.secondary.href}
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-medium tracking-wide text-[#005c4a] dark:text-[#b0d0c8] rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-[#00463b] border border-[#d9e8e4] dark:border-[#00342f] hover:bg-[#e6f0ed] dark:hover:bg-[#00342f] hover:scale-[1.02]"
            >
              {hero.cta.secondary.text}
            </Link>
          </div>
        </div>
      </div>
      <HeroVideoSection />
    </section>
  );
}
