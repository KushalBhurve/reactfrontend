"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const PlaceholdersAndVanishInput = ({
  placeholders,
  onChange,
  onSubmit,
}) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const canvasRef = useRef(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(
      ctx.canvas.width / 2,
      ctx.canvas.height / 2,
      frameCount * 2,
      0,
      2 * Math.PI
    );
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let frameCount = 0;
      let animationFrameId;
      const render = () => {
        frameCount++;
        draw(ctx, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      if (animating) {
        render();
      }
      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [animating]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setAnimating(true);
    const value = e.target[0].value;
    onSubmit && onSubmit(value);
    setTimeout(() => {
      setAnimating(false);
      setValue("");
    }, 1000);
  };

  return (
    <form
      className="relative w-full"
      onSubmit={(e) => {
        handleOnSubmit(e);
      }}
    >
      <AnimatePresence>
        {animating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-20"
          >
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-10">
        <input
          onChange={handleOnChange}
          value={value}
          type="text"
          className={cn(
            "w-full bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:ring-0",
            "px-4 py-3 rounded-lg border border-neutral-700"
          )}
          placeholder={placeholders[currentPlaceholder]}
        />
        <button
          className={cn(
            "absolute right-2 top-1/2 transform -translate-y-1/2",
            "text-neutral-500 hover:text-neutral-400"
          )}
        >
          &rarr;
        </button>
      </div>
    </form>
  );
};
