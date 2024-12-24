'use client';

import { useState, useEffect } from 'react';
import About from "@/components/about";
import Home from "@/components/home";
import ThemeSwitch from "@/components/theme-switcher";
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import { useLanguage } from '@/context/language.context';
import Image from 'next/image';

type Language = 'en' | 'pt';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage } = useLanguage() as { language: Language; toggleLanguage: () => void };
  const ulData = [
    { id: 1, name: language === 'en' ? 'home' : 'home', href: "home" },
    { id: 2, name: language === 'en' ? 'About' : 'Sobre', href: "about" },
    { id: 3, name: language === 'en' ? 'Skills' : 'Habilidades', href: "skills" },
    { id: 4, name: language === 'en' ? 'Projects' : 'Projetos', href: "projects" },
    { id: 5, name: language === 'en' ? 'Contact' : 'Contato', href: "contact" },
  ];
  const year = new Date().getFullYear();
  const componentData = {
    en: {
      footerFirstSection: `© ${year} Matheus. All rights reserved.`,
      footerSecondSection: 'Thanks for reading this far! 🚀'
    },
    pt: {
      footerFirstSection: `© ${year} Matheus. Todos os direitos reservados.`,
      footerSecondSection: 'Obrigado por ler até aqui! 🚀'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') ?? '';
        }
      });
      if (window.scrollY === 0 || window.scrollY < 70) {
        currentSection = 'home';
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full dark:bg-primaryColor bg-lightPrimaryColor">
      <header className="fixed top-0 left-0 w-full z-10 flex p-3 px-4 sm:px-10 md:px-48 justify-between items-center dark:bg-black bg-white shadow-md">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          <span className="dark:text-secondaryColor text-lightSecondaryColor">{'<>'}</span> Matheus{' '}
          <span className="dark:text-secondaryColor text-lightSecondaryColor">{'</>'}</span>
        </h1>

        <ul className="hidden md:flex gap-4">
          {ulData.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.href}`}
                className={`rounded-full px-4 py-2 ${activeSection === item.href
                  ? 'dark:bg-secondaryColor bg-lightSecondaryColor dark:text-black text-lightPrimaryColor'
                  : 'dark:text-white text-black hover:dark:bg-secondaryColor hover:dark:text-primaryColor hover:bg-lightSecondaryColor hover:text-white'
                  }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <button onClick={toggleLanguage}>
            {language === 'en' ? (
              <Image src="/lang/es.png" alt="Brazil" width={24} height={24} />
            ) : (
              <Image src="/lang/br.png" alt="Brazil" width={24} height={24} />
            )}
          </button>
          <ThemeSwitch />
        </div>
      </header>

      {/* Menu móvel */}
      <nav className="fixed bottom-0 left-0 w-full z-10 flex justify-around items-center p-3 bg-white dark:bg-black md:hidden">
        {ulData.map((item) => (
          <a
            key={item.id}
            href={`#${item.href}`}
            className={`text-sm ${activeSection === item.href
              ? 'text-primaryColor dark:text-secondaryColor'
              : 'text-gray-600 dark:text-gray-400'
              }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Conteúdo */}
      <main className="pt-20 space-y-20">
        <section id="home" className="flex items-center justify-center">
          <Home />
        </section>
        <section id="about" className="flex items-center justify-center">
          <About />
        </section>
        <section id="skills" className="flex items-center justify-center">
          <Skills />
        </section>
        <section id="projects" className="flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="flex items-center justify-center">
          <Contact />
        </section>
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
