import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Pizza {
    base: string
    toppings: string[] | []
};

interface ToppingsProps {
    addTopping: (topping: string) => void
    pizza: Pizza
};

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring', 
            delay: 0.5,
        },
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
    },
};

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
    },
};

const Toppings = ({ addTopping, pizza }: ToppingsProps) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    return (
        <motion.div 
            className="toppings container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map((topping: string) => {
                    let spanClass = (pizza.toppings as string[]).includes(topping) ? 'active' : '';
                    return (
                        <motion.li 
                            key={topping} 
                            onClick={() => addTopping(topping)}
                            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112'}}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{ topping }</span>
                        </motion.li>
                    );
                })}
            </ul>
            <Link to="/order">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Order
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Toppings;
