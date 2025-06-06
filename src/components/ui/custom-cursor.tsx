"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  color?: string;
}

const CustomCursor = ({ color = "#8b5cf6" }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOverClerk, setIsOverClerk] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is over a Clerk element
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      const isClerkElement = elementUnderCursor?.closest('.cl-rootBox, .cl-card, .cl-component, .cl-modal-backdrop, .cl-modal-container');
      setIsOverClerk(!!isClerkElement);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach((el) => {
        // Skip Clerk elements
        if (el.closest('.cl-rootBox, .cl-card, .cl-component, .cl-modal-backdrop, .cl-modal-container')) {
          return;
        }
        
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    // Set up a mutation observer to handle dynamically added Clerk elements
    const observer = new MutationObserver(() => {
      handleLinkHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: hidden || isOverClerk ? 0 : 1,
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 0.8,
      opacity: hidden || isOverClerk ? 0 : 1,
    },
    hovered: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 1.5,
      opacity: hidden || isOverClerk ? 0 : 1,
    },
  };

  const cursorDotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: hidden || isOverClerk ? 0 : 1,
    },
    clicked: {
      x: position.x - 4,
      y: position.y - 4,
      scale: 0.5,
      opacity: hidden || isOverClerk ? 0 : 1,
    },
    hovered: {
      x: position.x - 4,
      y: position.y - 4,
      opacity: isOverClerk ? 0 : 0,
    },
  };

  return (
    <div className="cursor-container pointer-events-none fixed inset-0 z-50">
      <motion.div
        className="cursor-outer w-8 h-8 rounded-full border-2 border-accent fixed top-0 left-0"
        variants={cursorVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{ borderColor: color }}
      />
      <motion.div
        className="cursor-dot w-2 h-2 rounded-full bg-accent fixed top-0 left-0"
        variants={cursorDotVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export { CustomCursor }; 