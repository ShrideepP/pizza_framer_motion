import { useEffect } from 'react';
import { motion } from "framer-motion";

interface Pizza {
    base: string
    toppings: string[] | []
};

interface OrderProps {
    pizza: Pizza
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
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
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const Order = ({ pizza, setShowModal }: OrderProps) => {

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 5000);
    }, [setShowModal]);

    return (
        <motion.div 
            className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childVariants}>
                You ordered a {pizza.base} pizza with:
            </motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map((topping: string) => <div key={topping}>{topping}</div>)}
            </motion.div>
        </motion.div>
    );

};

export default Order;
