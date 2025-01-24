import React from "react";
import LinkButton from './LinkButton';
import { CodeBracketIcon, PlayIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const herramientas = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
  },
  REACT: {
    name: "React",
    class: "bg-black text-white",
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-[#003159] text-white",
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#306998] text-white",
  },
  MATERIAL_UI: {
    name: "Material-UI",
    class: "bg-[#007FFF] text-white",
  },
  ANDROID: {
    name: "Android",
    class: "bg-[#3DDC84] text-white",
  },
};


const list = [
  {
    title: "BGX - Gestión de Servidores",
    description:
      "Aplicación web diseñada para la gestión y monitorización en tiempo real de servidores. El cliente Python recopila las métricas del servidor y las envía a una API REST construida con Express.js, que procesa y centraliza la información para su visualización en un frontend creado con Next.js.",
    link: "https://bgx.xabierbahillo.dev/",
    backend: "https://bgx-backend.xabierbahillo.dev/docs/",
    image: "bgx.webp",
    tags: [herramientas.NEXT, herramientas.EXPRESS, herramientas.PYTHON],
  },  
  {
    title: "Dragon Ball: Sparking! ZERO Characters",
    description:
      "Proyecto desarrollado en React que muestra una lista de personajes del juego Dragon Ball Sparking! ZERO. Los usuarios pueden ver las transformaciones de los personajes al hacer clic en sus tarjetas y buscar personajes por nombre.",
    github: "https://github.com/xabierbahillo1/dbszcharacters",
    link: "https://dbszcharacters.xabierbahillo.dev/",
    image: "dbzscharacters.webp",
    tags: [herramientas.REACT, herramientas.MATERIAL_UI],
  },
  {
    title: "Preguntados - Juego de Trivia",
    description:
      "Proyecto académico desarrollado en Android que recrea el juego Preguntados. Permite a los usuarios jugar trivia en línea contra otros jugadores. Los usuarios pueden responder preguntas en diferentes categorías y competir en tiempo real.",
    github: "https://github.com/xabierbahillo1/Preguntados",
    image: "preguntados.webp",
    tags: [herramientas.ANDROID],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-y-16">
      {list.map(({ image, title, description, tags, link, backend, github }) => (
        <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0" key={title}>
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={title}
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                    >
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
            <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                <LinkButton href={github}>
                  <CodeBracketIcon className="h-5 w-5" />
                  Codigo
                </LinkButton>
              )}
              {link && (
                <LinkButton href={link}>
                  <PlayIcon className="h-5 w-5" />
                  Demo
                </LinkButton>
              )}
              {backend && (
                <LinkButton href={backend}>
                  <BookOpenIcon className="h-5 w-5" />
                  API Docs
                </LinkButton>
              )}
            </footer>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
