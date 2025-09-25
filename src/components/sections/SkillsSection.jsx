import React from 'react';
import { skills } from '../../data/skills';
import SkillCard from '../ui/SkillCard';

const SkillsSection = () => (
  <section id="about" className="py-15 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003049] mb-1 underline underline-offset-4"  >Mes compétences</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;