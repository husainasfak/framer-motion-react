import React, { useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderVariants = {
     animationOne: {
          x: [-20, 20],
          y: [0, -30],
          transition: {
               x: {
                    repeat: Infinity,
                    duration: 1,
               },
               y: {
                    repeat: Infinity,
                    duration: 1,
                    ease: 'easeOut'
               }
          }
     },
     animationTwo: {
          y: [0, -40],
          x: 0,
          transition: {
               y: {
                    repeat: Infinity,
                    duration: 1,
                    ease: 'easeOut'
               }
          }
     }
};

const Loader = () => {
     const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
     useEffect(() => {
          cycleAnimation()
     }, [animation])
     return (
          <motion.div className="loader" variants={loaderVariants} animate={animation}>

          </motion.div>
     )
}

export default Loader