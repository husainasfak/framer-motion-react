import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const containerVariants = {
     hidden: {
          opacity: 1,
          x: '-100vw'
     },
     visible: {
          opacity: 1,
          x: 0,
          transition: {
               type: 'spring',
               delay: 0.5
          }
     },
     exit: {
          y: '-100vh',
          transition: {
               ease: 'easeInOut'
          }
     }
}
const Base = ({ addBase, pizza }) => {
     const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

     return (
          <motion.div className="base container"
               // initial={{ x: '100vw' }}
               // animate={{ x: 0 }}
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               exit={'exit'}
          // transition={{ type: 'spring', delay: 0.5 }}
          >

               <h3>Step 1: Choose Your Base</h3>
               <ul>
                    {bases.map(base => {
                         let spanClass = pizza.base === base ? 'active' : '';
                         return (
                              <li key={base} onClick={() => addBase(base)}>
                                   <span className={spanClass}>{base}</span>
                              </li>
                         )
                    })}
               </ul>

               {pizza.base && (
                    <motion.div className="next"
                         initial={{ x: '-100vw' }}
                         animate={{ x: 0 }}
                         transition={{ type: 'spring', stiffness: 130, }}
                    >
                         <Link to="/toppings">
                              <button>Next</button>
                         </Link>
                    </motion.div>
               )}

          </motion.div>
     )
}

export default Base;