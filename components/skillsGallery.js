import React from 'react';
import { FaJava } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiSketch } from 'react-icons/si';
import IconSpringboot from '../utils/springboot';
import IconMongodb from '../utils/mongo';
import IconConsoleSql from '../utils/sql';
import IconCloudFill from '../utils/springcloud';
import IconApi from '../utils/IconApi';
import IconSonarqube from '../utils/sonar';
import IconJunit5 from '../utils/junit';

import FadeInSection from '../components/fadeInSection';
import Skill from '../components/skill';

export default function SkillsGallery() {
  return (
    <section className={`mt-28 lg:mt-44 mx-5 md:mx-20 lg:mx-32 pb-20`}>
      <h2
        className={`dark:text-gray-100 text-5xl lg:text-7xl font-black`}
      >
        Skills
      </h2>
      <FadeInSection>
        <main className="flex flex-wrap justify-center p-4 lg:mt-20">
          <Skill icon={<FaJava />} tech="Java" />
          <Skill icon={<FaPython />} tech="Python" />
          <Skill icon={<FaNode />} tech="NodeJS" />
          <Skill icon={<IconSpringboot />} tech="Spring Boot" />
          <Skill icon={<SiJavascript />} tech="JavaScript" />
          <Skill icon={<FaCss3 />} tech="CSS" />
          <Skill icon={<IconMongodb />} tech="MongoDB" />
          <Skill icon={<IconConsoleSql />} tech="SQL" />
          <Skill icon={<IconCloudFill />} tech="Spring Cloud" />
          <Skill icon={<IconApi />} tech="REST APIs" />
          <Skill icon={<IconSonarqube />} tech="SonarQube" />
          <Skill icon={<IconJunit5 />} tech="Junit5" />
          
        </main>
      </FadeInSection>
    </section>
  );
}
