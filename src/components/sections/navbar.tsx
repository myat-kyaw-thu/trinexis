"use client";

import type React from "react";

import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "850px";

function NavMenuComponent() {
  const [activeSection, setActiveSection] = useState("hero");
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Initialize with first nav item
    const firstItem = navRef.current?.querySelector(
      `[href="#${siteConfig.nav.links[0].href.substring(1)}"]`,
    )?.parentElement;
    if (firstItem) {
      const rect = firstItem.getBoundingClientRect();
      setLeft(firstItem.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;
      const sections = siteConfig.nav.links.map((item) => item.href.substring(1));
      let closestSection = sections[0];
      let minDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      setActiveSection(closestSection);
      const navItem = navRef.current?.querySelector(`[href="#${closestSection}"]`)?.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setIsManualScroll(true);
      setActiveSection(targetId);

      const navItem = e.currentTarget.parentElement;
      if (navItem) {
        const rect = navItem.getBoundingClientRect();
        setLeft(navItem.offsetLeft);
        setWidth(rect.width);
      }

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsManualScroll(false);
      }, 500);
    }
  };

  return (
    <div className="hidden lg:block">
      <ul className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center" ref={navRef}>
        {siteConfig.nav.links.map((item) => (
          <li
            key={item.name}
            className={cn(
              "z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-tight",
              activeSection === item.href.substring(1)
                ? "text-[#005c4a] dark:text-[#b0d0c8]"
                : "text-[#005c4a]/60 dark:text-[#b0d0c8]/60 hover:text-[#005c4a] dark:hover:text-[#b0d0c8]",
            )}
          >
            <a href={item.href} onClick={(e) => handleClick(e, item.href)}>
              {item.name}
            </a>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-[#e6f0ed]/60 dark:bg-[#00463b]/60 border border-[#d9e8e4] dark:border-[#00342f]"
          />
        )}
      </ul>
    </div>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <header
      className={cn(
        "sticky z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0",
        hasScrolled ? "top-4" : "top-6 mx-0",
      )}
    >
      <motion.div
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
            hasScrolled
              ? "px-3 border border-[#d9e8e4] backdrop-blur-xl bg-[#e6f0ed]/95 dark:bg-[#00463b]/95 dark:border-[#00342f]"
              : "px-8",
          )}
        >
          <div className="flex h-[60px] ps-6 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <Icons.logo className="size-8 md:size-9 text-[#005c4a] dark:text-[#b0d0c8] transition-all duration-200 group-hover:text-[#005236] dark:group-hover:text-[#d9e8e4]" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xl font-bold text-[#005c4a] dark:text-[#e6f0ed] tracking-tight group-hover:text-[#005236] dark:group-hover:text-white transition-colors duration-200">
                  Trinexis
                </p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <div className="flex-1 flex justify-center">
              <NavMenuComponent />
            </div>

            {/* Right Section */}
            <div className="pe-6 flex items-center gap-3 shrink-0">
              <div className="hidden md:flex">
                <Link
                  className="bg-[#005c4a] hover:bg-[#005236] active:bg-[#00463b] dark:bg-[#005c46] dark:hover:bg-[#005c4a] dark:active:bg-[#005236] h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-xl text-white px-6 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  href="#"
                >
                  Try for free
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <ThemeToggle />

                <button
                  className="lg:hidden border border-[#d9e8e4] dark:border-[#00342f] size-9 rounded-xl cursor-pointer flex items-center justify-center hover:bg-[#e6f0ed] dark:hover:bg-[#00463b] active:bg-[#d9e8e4] dark:active:bg-[#00342f] transition-all duration-200"
                  onClick={toggleDrawer}
                >
                  {isDrawerOpen ? (
                    <X className="size-5 text-[#005c4a] dark:text-[#b0d0c8]" />
                  ) : (
                    <Menu className="size-5 text-[#005c4a] dark:text-[#b0d0c8]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div className="fixed inset-0 bg-[#00463b]/60 backdrop-blur-sm z-40" onClick={() => setIsDrawerOpen(false)} />
          <div className="fixed inset-x-0 w-[92%] mx-auto bottom-4 bg-[#e6f0ed] dark:bg-[#00463b] border border-[#d9e8e4] dark:border-[#00342f] p-5 rounded-2xl z-50">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                  <Icons.logo className="size-8 text-[#005c4a] dark:text-[#b0d0c8] group-hover:text-[#005236] dark:group-hover:text-[#d9e8e4] transition-colors duration-200" />
                  <p className="text-lg font-bold text-[#005c4a] dark:text-[#e6f0ed] tracking-tight group-hover:text-[#005236] dark:group-hover:text-white transition-colors duration-200">
                    Trinexis
                  </p>
                </Link>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="border border-[#d9e8e4] dark:border-[#00342f] rounded-xl p-2 cursor-pointer hover:bg-[#d9e8e4] dark:hover:bg-[#00463b] active:bg-[#b0d0c8] dark:active:bg-[#00342f] transition-all duration-200"
                >
                  <X className="size-5 text-[#005c4a] dark:text-[#b0d0c8]" />
                </button>
              </div>

              <div className="flex flex-col border border-[#d9e8e4] dark:border-[#00463b] rounded-xl bg-white dark:bg-[#00342f] overflow-hidden">
                {siteConfig.nav.links.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 border-b border-[#d9e8e4] dark:border-[#00463b] last:border-b-0 hover:bg-[#e6f0ed] dark:hover:bg-[#00463b] active:bg-[#d9e8e4] dark:active:bg-[#002623] transition-all duration-200"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.href.substring(1));
                        element?.scrollIntoView({ behavior: "smooth" });
                        setIsDrawerOpen(false);
                      }}
                      className="block font-medium text-[#005c4a] dark:text-[#b0d0c8] hover:text-[#005236] dark:hover:text-[#d9e8e4] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#"
                  className="bg-[#005c4a] hover:bg-[#005236] active:bg-[#00463b] dark:bg-[#005c46] dark:hover:bg-[#005c4a] dark:active:bg-[#005236] h-11 flex items-center justify-center text-sm font-medium tracking-wide rounded-xl text-white w-full transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Try for free
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
