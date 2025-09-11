import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react';

const HeroText = () => {

    const words = ["Secure", "Scalable", "Intelligent", "Modern"];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }

    return (