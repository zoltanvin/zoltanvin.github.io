import React from 'react';
import FadeInSection from './fadeInSection';
import Project from './project';

export default function ProjectGallery({ background, text, github, live }) {
  return (
    <section className={`mt-24 lg:mt-44 mx-5 md:mx-20 lg:mx-32`}>
      <h2
        className={`dark:text-gray-100 text-5xl lg:text-7xl font-black mb-10`}
      >
        Projects
      </h2>
      <FadeInSection>
        <main className="lg:flex flex-wrap">
          <Project
            text="A desktop application for managing football teams, players, and matches. 
            Features include an intuitive GUI built using MVC design principles and a connection 
            to a SQL Lite database to store changes made to the program."
            techstack= "Tech stack: Java, C#, SQL"
            background="bg-project-team"
            github="https://github.com/zoltanvin/team-manager#--------team-manager--"
            live="https://github.com/zoltanvin/team-manager#javafx-program-"
          />
          <Project
            text="A program that allows players to play the classic Pac-Man game and showcases 
            an implemented winning strategy. The custom strategy utilizes an algorithm based on 
            various factors, such as walls, distance to food, and ghosts' statuses."
            techstack= "Tech stack: Java, Spring"
            background="bg-project-pacman"
            github="https://github.com/zoltanvin/pac-man-legacy#--------pac-man-legacy--"
            live="https://github.com/zoltanvin/pac-man-legacy#winning-strategy-for-the-game"
          />
          <Project
            text="A tool that analyzes and automatically rotates images to the correct angle, 
            even in the presence of noise. Custom image processing filters and masks were 
            implemented to improve accuracy"
            techstack= "Tech stack: Python"
            background="bg-project-rotate"
            github="https://github.com/zoltanvin/straight-image#--------image-rotator--"
            live="https://github.com/zoltanvin/straight-image#straightening-photos-with-noise-taken-at-an-angle"
          />
           <Project
            text="This landing page"
            techstack= "Tech stack: React, NextJs"
            background="bg-project-github"
            github="https://github.com/zoltanvin/straight-image#--------image-rotator--"
            live="https://github.com/zoltanvin/straight-image#straightening-photos-with-noise-taken-at-an-angle"
          /> 
        </main>
      </FadeInSection>
    </section>
  );
}
