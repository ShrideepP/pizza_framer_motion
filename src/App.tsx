import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Home, Order, Toppings, Base, Modal } from './components';
import { AnimatePresence } from 'framer-motion';

interface Pizza {
    base: string
    toppings: string[] | []
};

const App = () => {
    
    const location = useLocation();
    
    const [pizza, setPizza] = useState<Pizza>({ base: "", toppings: []});
    const [showModal, setShowModal] = useState(false);

    const addBase = (base: string) => {
        setPizza({ ...pizza, base })
    };

    const addTopping = (topping: string) => {
        let newToppings: string[];
        
        if (!(pizza.toppings as string[]).includes(topping)) {
            newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter(item => item !== topping);
        };

        setPizza({ ...pizza, toppings: newToppings });
    };

    return (
        <>
            <Header />
            <Modal showModal={showModal} />
            <AnimatePresence mode='wait' onExitComplete={() => setShowModal(false)}>
                <Routes location={location} key={location.key}>
                    <Route index element={<Home />} />
                    <Route path='/base' element={<Base addBase={addBase} pizza={pizza} />} />
                    <Route path='/toppings' element={<Toppings addTopping={addTopping} pizza={pizza} />} />
                    <Route path='/order' element={<Order pizza={pizza} setShowModal={setShowModal} />} />
                </Routes>
            </AnimatePresence>
        </>
    );

};

export default App;