'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../sanity/client'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className='my-5'>
      <h2 className="md:text-[2.75rem] font-extrabold text-white text-center uppercase sm:text-[2rem]">I Know that <span className='text-light-blue'>Good Design</span> <br />means  <span className='text-light-blue'>Good Business</span></h2>

      <div className="flex flex-wrap mt-2 justify-center items-center">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: 'tween' }}
            className="flex  flex-col justify-start items-center m-2 max-w-[190px] hover:bg-light-blue p-3 rounded-md max-w-[250px]"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className='w-full, h-[170px] rounded-md'/>
            <h2 className="text-[1rem] font-extrabold text-left text-white" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text text-white" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;