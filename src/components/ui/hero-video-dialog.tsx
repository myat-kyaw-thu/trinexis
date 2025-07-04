/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";
import { useState } from "react";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div className={cn("relative", className)}>
      <div className="group relative cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc || "/placeholder.svg"}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full transition-all duration-200 ease-out group-hover:brightness-[0.8] isolate rounded-lg"
          />
        ) : (
          <div className="w-full aspect-video bg-[#e6f0ed] dark:bg-[#00463b] rounded-lg border border-[#d9e8e4] dark:border-[#00342f]" />
        )}
        <div className="absolute isolate inset-0 flex scale-[0.9] items-center justify-center rounded-lg transition-all duration-200 ease-out group-hover:scale-100">
          <div className="flex size-28 items-center justify-center rounded-full bg-gradient-to-t from-[#005c4a]/20 to-[#b0d0c8]/15 backdrop-blur-md border border-[#d9e8e4]/30 dark:border-[#00342f]/30">
            <div className="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-t from-[#005c4a] to-[#005c46] shadow-lg transition-all duration-200 ease-out group-hover:scale-[1.2] border border-[#005236]/20">
              <Play
                className="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#00463b]/60 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
            >
              <motion.button
                className="absolute cursor-pointer hover:scale-[98%] transition-all duration-200 ease-out -top-16 right-0 rounded-full bg-[#00463b]/80 dark:bg-[#e6f0ed]/80 p-2 text-xl text-white dark:text-[#005c4a] ring-1 ring-[#00342f]/30 dark:ring-[#d9e8e4]/30 backdrop-blur-md"
                onClick={() => setIsVideoOpen(false)}
              >
                <XIcon className="size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-lg border-2 border-[#005c4a] dark:border-[#b0d0c8]">
                <iframe
                  src={videoSrc}
                  className="size-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
