"use client";

import { useState, useEffect, useMemo } from "react";
import React from "react";
import About from "@/components/about";
import Home from "@/components/home";
import ThemeSwitch from "@/components/theme-switcher";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import { useLanguage } from "@/context/language.context";
import Image from "next/image";
import { motion } from "motion/react";

type Language = "en" | "pt";
type MenuSection = {
  id: string;
  name: { en: string; pt: string };
  href: string;
  component: React.ReactElement;
  initial: { opacity: number; y: number };
};

const MENU_SECTIONS: MenuSection[] = [
  {
    id: "home",
    name: { en: "home", pt: "home" },
    href: "home",
    component: <Home />,
    initial: { opacity: 0, y: -100 },
  },
  {
    id: "about",
    name: { en: "About", pt: "Sobre" },
    href: "about",
    component: <About />,
    initial: { opacity: 0, y: 100 },
  },
  {
    id: "skills",
    name: { en: "Skills", pt: "Habilidades" },
    href: "skills",
    component: <Skills />,
    initial: { opacity: 0, y: 100 },
  },
  {
    id: "projects",
    name: { en: "Projects", pt: "Projetos" },
    href: "projects",
    component: <Projects />,
    initial: { opacity: 0, y: 100 },
  },
  {
    id: "gallery",
    name: { en: "Gallery", pt: "Galeria" },
    href: "gallery",
    component: <Gallery />,
    initial: { opacity: 0, y: 100 },
  },
  {
    id: "contact",
    name: { en: "Contact", pt: "Contato" },
    href: "contact",
    component: <Contact />,
    initial: { opacity: 0, y: 100 },
  },
];

const getFooterData = (year: number) => ({
  en: {
    footerFirstSection: `© ${year} Matheus. All rights reserved.`,
    footerSecondSection: "Thanks for reading this far! 🚀",
  },
  pt: {
    footerFirstSection: `© ${year} Matheus. Todos os direitos reservados.`,
    footerSecondSection: "Obrigado por ler até aqui! 🚀",
  },
});

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { language, toggleLanguage } = useLanguage() as {
    language: Language;
    toggleLanguage: () => void;
  };
  const year = useMemo(() => new Date().getFullYear(), []);
  const componentData = useMemo(() => getFooterData(year), [year]);

  // Menu traduzido
  const menuSections = useMemo(
    () =>
      MENU_SECTIONS.map((item) => ({ ...item, label: item.name[language] })),
    [language]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") ?? "";
        }
      });
      if (window.scrollY === 0 || window.scrollY < 70) {
        currentSection = "home";
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full dark:bg-primaryColor bg-lightPrimaryColor">
      <header className="fixed top-0 left-0 w-full z-10 flex p-3 px-4 sm:px-10 md:px-48 justify-between items-center dark:bg-black bg-white shadow-md">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          <span className="dark:text-secondaryColor text-lightSecondaryColor">
            {"<>"}
          </span>{" "}
          Matheus{" "}
          <span className="dark:text-secondaryColor text-lightSecondaryColor">
            {"</>"}
          </span>
        </h1>

        <ul className="hidden xl:flex gap-4">
          {menuSections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.href}`}
                className={`rounded-full  px-4 py-2 ${
                  activeSection === item.href
                    ? "dark:bg-secondaryColor bg-lightSecondaryColor dark:text-black text-lightPrimaryColor"
                    : "dark:text-white text-black hover:dark:bg-secondaryColor hover:dark:text-primaryColor hover:bg-lightSecondaryColor hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <button onClick={toggleLanguage}>
            <Image
              src={language === "en" ? "/lang/es.png" : "/lang/br.png"}
              alt={language === "en" ? "Spanish" : "Brazil"}
              width={24}
              height={24}
            />
          </button>
          <ThemeSwitch />
        </div>
      </header>

      {/* Menu móvel */}
      <nav className="fixed bottom-0 left-0 w-full z-10 flex justify-around items-center p-3 bg-white dark:bg-black xl:hidden">
        {menuSections.map((item) => (
          <a
            key={item.id}
            href={`#${item.href}`}
            className={`text-sm ${
              activeSection === item.href
                ? "text-primaryColor dark:text-secondaryColor"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Conteúdo */}
      <main className="pt-20 space-y-20">
        {menuSections.map(({ id, component, initial }) => (
          <motion.section
            key={id}
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            id={id}
            className="flex items-center justify-center"
          >
            {component}
          </motion.section>
        ))}
      </main>

      <footer className="w-full z-10 dark:bg-black bg-white shadow-md p-5 md:p-10 px-4 md:px-48">
        <p className="text-center text-sm md:text-xl mt-4">
          {componentData[language].footerFirstSection}
        </p>
        <p className="text-center text-xs md:text-sm italic">
          {componentData[language].footerSecondSection}
        </p>
      </footer>
    </div>
  );
}
