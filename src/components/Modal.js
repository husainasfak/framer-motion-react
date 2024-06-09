import { AnimatePresence, delay } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const backdropVariants = {
     visible: { opacity: 1 },
     hidden: { opacity: 0 }
}
const modalVariant = {
     hidden: {
          y: "-100vh",
          opacity: 0
     },
     visible: {
          y: '200px',
          opacity: 1,
          transition: {
               delay: 0.5
          }
     }
}
const Modal = ({ showModal, setShowModal }) => {
     console.log('showModal', showModal)
     return (
          <AnimatePresence mode='wait'>
               {
                    showModal && (
                         <motion.div className='backdrop' variants={backdropVariants}
                              animate="visible"
                              initial="hidden"
                         >
                              <motion.div className='modal' variants={modalVariant} animate="visible" initial="hidden" exit={"hidden"}>
                                   <p>Want to make another!</p>
                                   <Link to={'/'}>
                                        <button> Create</button>

                                   </Link>
                              </motion.div>
                         </motion.div>
                    )
               }
          </AnimatePresence>
     )
}

export default Modal