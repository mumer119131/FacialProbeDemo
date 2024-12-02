import React from 'react'
import { motion } from 'framer-motion'

const SwipeLeft = (props) => {
    const { className, children } = props
    return (
        <motion.div
            className={className + " relative"}
            initial={{ left: '100%', opacity: 0 }}
            animate={{ left: "0", opacity: 1 }}
        >{children}</motion.div>
    )
}

export default SwipeLeft