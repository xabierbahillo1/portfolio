import React from 'react';
import EducationElement from './EducationElement';

const List = [
  {
    date: "Septiembre 2017 - Julio 2021",
    title: "Grado en Ingeniería Informática de Gestión y Sistemas de Información",
    company: "UPV/EHU",
  }
];

const Education = () => {
  return (
    <ol className="relative mt-16">
      {List.map((List, index) => (
        <li key={index} className="mb-6">
          <EducationElement {...List} />
        </li>
      ))}
    </ol>
  );
};

export default Education;
