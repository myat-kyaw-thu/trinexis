import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoSection() {
  return (
    <div className="relative px-8 py-6 mt-8">
      <div className="relative max-w-5xl mx-auto">
        <div className="relative size-full rounded-lg overflow-hidden border-2 border-[#005c4a] dark:border-[#b0d0c8]">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailAlt="Trinexis Platform Demo"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailAlt="Trinexis Platform Demo"
          />
        </div>
      </div>
    </div>
  );
}
