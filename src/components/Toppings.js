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
          x: '100vw',
          transition: {
               ease: 'easeInOut'
          }
     }
}
const Toppings = ({ addTopping, pizza }) => {
     let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

     return (
          <motion.div className="toppings container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">

               <h3>Step 2: Choose Toppings</h3>
               <ul>
                    {toppings.map(topping => {
                         let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                         return (
                              <li key={topping} onClick={() => addTopping(topping)}>
                                   <span className={spanClass}>{topping}</span>
                              </li>
                         )
                    })}
               </ul>

               <Link to="/order">
                    <button>
                         Order
                    </button>
               </Link>

          </motion.div>
     )
}

export default Toppings;