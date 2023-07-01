'use client';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
import Avatar from '../assets/avatar.png'
import Image from 'next/image';
import { fadeIn } from '@/utils/variants';


export default function Header(){
    return (
        <section className="bg-slate-800 px-2 min-h-[80vh] flex items-center justify-center p-5">
            <div className='container mx-auto max-w-7xl flex justify-center items-center'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='text-white flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            whileInView={{y : [50, 0], opacity : [0, 1]}}
                            transition={{duration: 0.5}}
                            className='text-[40px] font-bold leading-[0.8] lg:text-[60px] mb-2'
                        >
                            CHIRAG <span className='m-1'>BHATNAGAR</span>
                        </motion.h1>
                        <motion.div 
                            whileInView={{y : [50, 0], opacity : [0, 1]}}
                            transition={{duration: 0.7}}
                            className='mb-6 text-[28px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='mr-4'>I am a</span>
                            <TypeAnimation 

                                sequence={[
                                    '<Developer/>',
                                    1000,
                                    
                                ]}
                                speed = {5}
                                className='text-light-blue' 
                                wrapper='span'
                                repeat={Infinity}
                            
                            />
                        </motion.div>
                        <motion.p 
                        whileInView={{y : [50, 0], opacity : [0, 1]}}
                        transition={{duration: 0.9}}
                        className='mb-8 max-w-lg mx-auto lg:mx-0'>
                        As a software developer with experience in front‑end and back‑end development, I possess a keen problem‑solving ability and a
                        strong desire to continuously improve my skills
                        </motion.p>
                        <motion.div 
                        whileInView={{y : [50, 0], opacity : [0, 1]}}
                        transition={{duration: 1.1}}
                        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <a
                            href="https://docs.google.com/viewer?url=https://newbie465.github.io/Resume/Chirag_Bhatnagar_Resume.pdf&embedded=true"
                            className="mx-1 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-white bg-light-blue hover:bg-blue-950"
                            >
                                Resume
                            </a>
                        </motion.div>
                        <motion.div
                        whileInView={{y : [50, 0], opacity : [0, 1]}}
                        transition={{duration: 1.3}} 
                        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href='#'>
                                <FaGithub className='lg:w-8'/>
                            </a>
                            <a href='#'>
                                <FaLinkedin/>
                            </a>
                            <a href='#'>
                                <FaYoutube/>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div 
                    whileInView={{y : [-100, 0], opacity : [0, 1]}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    className='hidden lg:flex flex-1 max-w-[400px] lg:max-w-[500px] '>
                        <Image src={Avatar} width={500} height={500} className='rounded-[50%] shadow-lg hover:shadow-light-blue'/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}