import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {FaNodeJs} from "react-icons/fa"
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVarient = (duration) => ({
  initial:{ y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
    
  },

});
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1.5}}


        className='flex flex-wrap item-center justify-center gap-4'>
            <motion.div
             variants={iconVarient(2.5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4' >
              <RiReactjsLine className='text-7xl text-cyan-400'/>
             </motion.div>
             <motion.div 
             variants={iconVarient(3)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaNodeJs className='text-7xl text-green-600'/>
             </motion.div>
             <motion.div 
             variants={iconVarient(2)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
              <BiLogoPostgresql  className='text-7xl text-sky-700'/>
             </motion.div>
             <motion.div 
             variants={iconVarient(4)}
             initial="initial"
             animate="animate"
             
             className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiMysql className='text-7xl text-yellow-400'/>
             </motion.div>
             <motion.div 
             variants={iconVarient(2)}
             initial="initial"
             animate="animate"
             
             className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiCplusplus className='text-7xl text-cyan-400'/>
             </motion.div>
             <motion.div
              variants={iconVarient(3)}
              initial="initial"
              animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiPython className='text-7xl text-blue-500 '/>
             </motion.div>
             <motion.div 
             variants={iconVarient(2.5)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiTailwindcss className='text-7xl text-cyan-300'/>
             </motion.div>
             

             
         </motion.div> 

    </div>
  )
}

export default Technologies



