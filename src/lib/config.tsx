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
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#005c4a] dark:fill-[#b0d0c8]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
      </svg>
    ),
    badge: "Revolutionizing Freelance Team Management",
    title: "Build Elite Freelance Teams That Scale Your Business",
    description:
      "Transform your business with our revolutionary platform that seamlessly orchestrates distributed freelance teams, optimizes workflows, and delivers unprecedented results for entrepreneurs and enterprises.",
    cta: {
      primary: {
        text: "Start Building",
        href: "#",
      },
      secondary: {
        text: "Learn More",
        href: "#",
      },
    },
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
