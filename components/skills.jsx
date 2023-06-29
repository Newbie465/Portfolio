'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { urlFor, client } from '@/sanity/client';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section id='skills' className=''>
    <div className='min-h-[80vh] mx-auto max-w-7xl flex flex-col items-center pt-4 justify-center'>  
      <h2 className="md:text-[2.75rem] font-extrabold text-white text-center uppercase text-[2rem]">Skills & <span className='text-light-blue'>Experiences</span></h2>

      <div className="flex md:flex-row flex-col justify-center items-center min-h-[40vh] max-w-[800px]">
        <motion.div className="flex flex-1 flex-wrap md:justify-start md:items-start md:mr-5 mr-0 justify-center items-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center flex-col text-center m-1"
              key={skill.name}
            >
              <div
                className="flex justify-center items-center w-[90px] h-[90px] rounded-full sm:w-[70px] sm:h-[70px] shadow-md hover:shadow-light-blue bg-slate-800 m-2.5"
              >
                <img src={urlFor(skill.icon)} alt={skill.name} className='w-[50%] h-[50%]' />
              </div>
              <p className="p-text font-extrabold mt-1">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='flex justify-center items-center mb-3'>
          <div className=" flex flex-1 justify-center items-start flex-col sm:mt-2">
            {experiences?.map((experience) => (
              <motion.div
                className="flex flex-row justify-start items-start my-1"
                key={experience.year}
              >
                <div className="md:mr-3 sm:mr-1 mr-3">
                  <p className="bold-text font-[800] text-light-blue">{experience.year}</p>
                </div>
                <motion.div className="flex flex-1">
                  {experience.works?.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-start items-start mb-1 cursor-pointer"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text font-medium">{work.name}</h4>
                        <p className="p-text font-normal mt-[5px] text-slate-400">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;