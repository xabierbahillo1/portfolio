import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const navItems = [
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Formación",
    label: "formacion",
    url: "/#formacion",
  },
  {
    title: "Contacto",
    label: "contacto",
    url: "mailto:xabierbahillo1@gmail.com",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detecta el scroll para sombrear el header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("header nav a");
  
    const handleScroll = () => {
      let activeSectionId = null;
      const visibleThreshold = 0.5;
  
      // Verificar si estamos cerca del final de la página
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
  
      // Verificar si estamos al principio de la página (cerca de 0)
      const isAtTop = window.scrollY < 10;
  
      // Si estamos al principio de la página, no resaltar ninguna sección
      if (isAtTop) {
        activeSectionId = null;
      } else {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionHeight = rect.height;
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
          // Considerar la sección activa si más del 50% de la sección es visible
          if (visibleHeight / sectionHeight > visibleThreshold) {
            activeSectionId = section.id;
          }
        });
      }
  
      // Si estamos al final de la página resaltar la última sección
      if (isAtBottom) {
        activeSectionId = sections[sections.length - 1].id;
      }
  
      // Cambiar el color de los enlaces del menu
      navItems.forEach((item) => {
        const sectionId = item.getAttribute("aria-label");
        if (activeSectionId === sectionId) {
          item.classList.add("text-blue-500");
        } else {
          item.classList.remove("text-blue-500");
        }
      });

    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Detectar también al cargar la página
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav
        className={`flex px-2 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center nav-animation ${scrolled ? 'scrolled' : ''}`}
      >
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
