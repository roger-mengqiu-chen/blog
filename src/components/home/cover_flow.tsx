'use client';

import { useState, useEffect, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { PostMetadata } from "@/utils/post_utils";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from './cover_flow.module.css';
import { Post } from "./post";


const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.95,
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
    x: direction < 0 ? 500 : -500,
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

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  const handleNext = useCallback(() => {
    paginate(1);
  }, [paginate]);

  const handlePrev = useCallback(() => {
    paginate(-1);
  }, [paginate]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [handleNext, page]);

  return (
    <Box className={styles.flow_container}>
      <Box className={styles.arrow}>
        <IconButton onClick={handlePrev} className="text-white">
          <ArrowBack fontSize="medium" />
        </IconButton>
      </Box>
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
          <Post
            title={projects[projectIndex].title}
            description={projects[projectIndex].description}
            category={projects[projectIndex].category}
            tags={projects[projectIndex].tags}
            time={projects[projectIndex].time}
            thumbnail={projects[projectIndex].thumbnail}
            slug={projects[projectIndex].slug} 
          />

        </motion.div>
      </AnimatePresence>
      <Box className={styles.arrow}>
        <IconButton onClick={handleNext} className="text-white">
          <ArrowForward fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  )
}
