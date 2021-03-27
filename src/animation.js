import {motion} from 'framer-motion';

export const fade = {
    hidden: {y: 50, opacity: 0},
    show: {y: 0, opacity: 1, transition: {duration: 0.5}},
    exit: {opacity: 0, transition: {duration: 0.5}}
}