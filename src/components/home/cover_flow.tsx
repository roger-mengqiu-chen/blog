'use client';

import { useState } from "react";
import { Box, IconButton, Paper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { PostMetadata } from "@/utils/post_utils";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from './cover_flow.module.css';


const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500, // Reduce the distance to prevent "jumping"
    opacity: 0,
    scale: 0.95, // Slight scale for depth effect
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500, // Exit smoothly in the correct direction
    opacity: 0,
    scale: 0.95,
  }),
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};



export default function CoverFlow({ projects } : {projects: PostMetadata[]}) {
  const [[page, direction], setPage] = useState([0, 0]);

  const projectIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleNext = () => {
    paginate(1);
  };

  const handlePrev = () => {
    paginate(-1);
  };

  return (
    <Box className={styles.flow_container}>
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.5 }
          }}
          layout
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Paper className={styles.coverflow}>
            <Box className={styles.arrow}>
              <IconButton onClick={handlePrev} className="text-white">
                <ArrowBack fontSize="large" />
              </IconButton>
            </Box>
            <Box className={styles.display}>
              
                <h3 className="text-xl font-semibold">{projects[projectIndex].title}</h3>
                <p className="text-gray-400">Description of {projects[projectIndex].title}...</p>

            </Box>
            <Box className={styles.arrow}>
              <IconButton onClick={handleNext} className="text-white">
                <ArrowForward fontSize="large" />
              </IconButton>
            </Box>
          </Paper>
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
