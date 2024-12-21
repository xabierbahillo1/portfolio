import React from 'react';
import ExperienceElement from './ExperienceElement';

const List = [
  {
    date: "Julio 2020 - Actualidad",
    title: "Ingeniero de Software",
    company: "InLOG",
    description: 
    "Desarrollo, soporte y mantenimiento de una aplicación de gestión de almacenes para multiples clientes",
    skills: [
      "Desarrollo de la aplicación web utilizando el framework Struts.",
      "Implementación de APIs SOAP y REST con Java para la integración de servicios.",
      "Desarrollo PL/SQL con base de datos Oracle.",
      "Gestión y despliegue de aplicaciones en la nube (OCI)",
    ]
  }
];

const Experience = () => {
  return (
    <ol className="relative mt-16">
      {List.map((List, index) => (
        <li key={index} className="mb-6">
          <ExperienceElement {...List} />
        </li>
      ))}
    </ol>
  );
};

export default Experience;
