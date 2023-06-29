'use client';

import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../sanity/client';

const Projects = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section className='bg-slate-800'>
    <div className='min-h-[80vh] mx-auto max-w-7xl flex justify-center items-center flex-col p-10' id='projects'>
      <h2 className="md:text-[2.75rem] font-extrabold text-white text-center uppercase text-[2rem]">My Creative <span className='text-light-blue'>Portfolio</span> Section</h2>

      <div className="flex flex-row justify-center items-center flex-wrap" style={{margin : "2rem 0 2rem"}}>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`px-[0.5rem] py-[1rem] rounded-[0.5rem] bg-light-blue font-extrabold cursor-pointer m-[0.5rem] hover:bg-blue-950 xl:px-1 xl:py-2 xl:rounded-[0.5rem] flex justify-center items-centers ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterWork?.map((work, index) => (
          <div className="flex justify-center items-center w-[270px] flex-col m-2 p-1 rounded-[0.5rem] bg-slate-900 cursor-pointer transition-all duration-300 ease-in ease-out shadow-lg hover:shadow-light-blue xl:w-[470px] xl:p-[1.25rem]" key={index}>
            <div
              className="w-full h-[230px] relative flex justify-center items-center"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} className='w-full h-[100%] rounded-[0.5rem] object-cover' />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-[0.5rem] opacity-0 transition-all duration-300 ease-in flex justify-center items-center bg-black/[0.6]"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center w-[50px] h-[50px] rounded-full m-1 font-extrabold cursor-pointer transition-all duration-300 ease-in"
                  >
                    <AiFillEye className='w-[50%] h-[50%]' />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-center items-center w-[50px] h-[50px] rounded-full m-1 font-extrabold cursor-pointer transition-all duration-300 ease-in"
                  >
                    <AiFillGithub className='w-[50%] h-[50%]' />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="p-[0.5rem] w-full relative flex-col flex justify-center items-center">
              <h4 className="bold-text mt-1 font-extrabold text-[20px]">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="absolute px-[0.5rem] py-1 rounded-[10px] top-[-20px] flex justify-center items-center bg-slate-900">
                <p className="p-text">{work?.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
    </section>
  );
};

export default Projects;