'use client';

import { useState } from "react";
import { Box, Card, CardContent, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { PostMetadata } from "@/utils/post_utils";
import { motion, AnimatePresence } from "framer-motion";


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};



export default function CoverFlow({ projects } : {projects: PostMetadata[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex % projects.length);
  };

  const handlePrev = () => {
    const newIndex = currentIndex -1;
    setCurrentIndex(newIndex % projects.length);
  };

  return (
    <Box className="min-h-screen bg-gray-900 text-white px-6 py-12 text-center">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold">Roger Chen</h1>
      <p className="text-lg mt-2">Software Developer</p>
      <p className="mt-4 text-gray-400">
        Crafting scalable solutions with Python, Java, JavaScript, and modern frameworks.
      </p>
      
      {/* Projects Cover Flow */}
      <Box className="relative flex items-center justify-center mt-12">
        <IconButton onClick={handlePrev} className="absolute left-0 text-white">
          <ArrowBack fontSize="large" />
        </IconButton>
        <AnimatePresence initial={false}>
        {projects.map((project, index) => (
            index === currentIndex && (
              <motion.div
                key={project.title}
                variants={variants}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                // transition={{
                //   x: { type: "spring", stiffness: 300, damping: 30 },
                //   opacity: { duration: 0.2 }
                // }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
              >
                <Box className="w-80 flex justify-center">
                  <Card className="w-80 bg-gray-800 shadow-lg">
                    <CardContent>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-gray-400">Description of {project.title}...</p>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <IconButton onClick={handleNext} className="absolute right-0 text-white">
          <ArrowForward fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
}
