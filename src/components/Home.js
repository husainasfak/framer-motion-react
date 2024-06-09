import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Loader from './Loader';
const ButtonVariants = {
     // visible: {

     //      // x: [0, -20, 20, -20, 20, 0], Keyframmes
     //      // transition: {
     //      //      delay: 2
     //      // }
     // },
     hover: {
          scale: 1.1,
          // scale: [1, 1.2, 1, 1.2, 1],
          textShadow: '0px 0px 8px rgb(255,255,255)',
          // infinte keyframes
          transition: {
               repeat: 10,
               repeatType: 'reverse',
               duration: 0.3
          }
     }
}

const containerVariants = {
     hidden: {
          opacity: 0
     },
     visible: {
          opacity: 1,
          transition: {
               delay: 1.5
          }
     },
     exit: {
          x: '-100vw',
          transition: {
               ease: 'easeInOut'
          }
     }
}
const Home = () => {
     return (
          <motion.div
               className="home container"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               exit='exit'
          >
               <motion.h2 animate={{ fontSize: 100, color: '#ff2994', }} transition={{ delay: 2 }}>
                    Welcome to Pizza Joint
               </motion.h2>
               <Link to="/base">
                    <motion.button variants={ButtonVariants} whileHover="hover">
                         Create Your Pizza
                    </motion.button>
               </Link>
               <Loader />
          </motion.div>
     )
}

export default Home;