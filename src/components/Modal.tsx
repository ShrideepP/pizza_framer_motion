import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
    showModal: boolean
};

const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: 200,
        opacity: 1,
        transition: { delay: 0.5 }
    },
};

const Modal = ({ showModal } : ModalProps) => {
    return (
        <AnimatePresence mode="wait">
            {showModal && (
                <motion.div 
                    className="backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="modal"
                        variants={modalVariants}
                    >
                        <p>Want to make another pizza?</p>
                        <Link to='/'>
                            <button>
                                Start Again
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
