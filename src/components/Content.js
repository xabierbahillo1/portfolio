import React from 'react';
import Profile from './Profile';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import { BriefcaseIcon, CommandLineIcon, AcademicCapIcon    } from '@heroicons/react/24/outline';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

const Content = () => {
  return (
    <>
      <SectionContainer className="py-16 md:py-36">
        <Profile />
      </SectionContainer>

      <SectionContainer id="experiencia">
        <SectionTitle>
          <BriefcaseIcon className="w-8 h-8" />
          Experiencia laboral
        </SectionTitle>
        <Experience />
      </SectionContainer>

      <SectionContainer id="proyectos" className="py-8 md:py-16">
        <SectionTitle>
          <CommandLineIcon className="w-8 h-8" />
          Proyectos personales
        </SectionTitle>
        <Projects />
      </SectionContainer>

      <SectionContainer id="formacion">
        <SectionTitle>
          <AcademicCapIcon className="w-8 h-8" />
          Formación
        </SectionTitle>
        <Education />
      </SectionContainer>
    </>
  );
};

export default Content;
