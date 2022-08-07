import React, { Fragment } from 'react'
import { motion } from 'framer-motion';

/**
 * This Component Used To Make Animation On Component Enter The Viewport
 * @returns React Component
 */ 
const AnimatedViewer = ({ children }) => {
  return (
    <Fragment>
        <motion.div whileInView={{ opacity: [0, 0, 1] }}>
            {children}
        </motion.div>
    </Fragment>
  )
}

export default React.memo(AnimatedViewer)