import { cn } from "@/lib/utils";
import type React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={cn("p-1 py-0.5 font-medium dark:font-semibold text-secondary", className)}>{children}</span>;
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Trinexis",
  description:
    "Trinexis is a revolutionary freelance team orchestration platform that empowers entrepreneurs and enterprises to seamlessly coordinate, optimize, and scale their distributed workforce ecosystem with unprecedented efficiency and strategic precision.",
  tagline: "Elevate Your Business Through Strategic Freelance Team Excellence",
  cta: "Transform Your Business Today",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Freelance Team Management",
    "Distributed Workforce Solutions",
    "Project Orchestration Platform",
    "Remote Team Coordination",
    "Freelancer Collaboration Tools",
    "Business Process Optimization",
    "Scalable Team Infrastructure",
    "Enterprise Freelance Solutions",
    "Workforce Management System",
    "Strategic Team Building",
  ],
  links: {
    email: "hello@trinexis.com",
    twitter: "https://twitter.com/trinexis",
    discord: "https://discord.gg/trinexis",
    github: "https://github.com/trinexis",
    instagram: "https://instagram.com/trinexis",
    linkedin: "https://linkedin.com/company/trinexis",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "Platform", href: "#platform" },
      // { id: 3, name: "Solutions", href: "#solutions" },
      { id: 4, name: "Features", href: "#features" },
      { id: 5, name: "Pricing", href: "#pricing" },
      // { id: 6, name: "Resources", href: "#resources" },
    ],
  },
  footerLinks: [
    {
      title: "Platform",
      links: [
        { id: 1, title: "Team Management", url: "#team-management" },
        { id: 2, title: "Project Orchestration", url: "#project-orchestration" },
        { id: 3, title: "Performance Analytics", url: "#analytics" },
        { id: 4, title: "Workflow Automation", url: "#automation" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { id: 5, title: "Enterprise", url: "#enterprise" },
        { id: 6, title: "Startups", url: "#startups" },
        { id: 7, title: "Agencies", url: "#agencies" },
        { id: 8, title: "Consultants", url: "#consultants" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: 9, title: "About Trinexis", url: "#about" },
        { id: 10, title: "Leadership", url: "#leadership" },
        { id: 11, title: "Careers", url: "#careers" },
        { id: 12, title: "Press Kit", url: "#press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 13, title: "Documentation", url: "#docs" },
        { id: 14, title: "API Reference", url: "#api" },
        { id: 15, title: "Success Stories", url: "#case-studies" },
        { id: 16, title: "Support Center", url: "#support" },
      ],
    },
  ],

};

export type SiteConfig = typeof siteConfig;
