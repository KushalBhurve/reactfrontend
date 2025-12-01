"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export class Vortex {
  constructor(options) {
    this.options = { ...Vortex.DEFAULT_OPTIONS, ...options };
    this.init();
  }

  init() {
    this.range = this.options.range;
    this.speed = this.options.speed;
    this.radius = this.options.radius;
    this.waitFor = this.options.waitFor;
    this.el = this.options.el;

    this.initCanvas();
    this.initCircles();

    if (this.waitFor) {
      this.isWaiting = true;
      setTimeout(() => (this.isWaiting = false), this.waitFor);
    }

    this.render();
  }

  initCanvas() {
    this.canvas = this.el || document.createElement("canvas");
    if (!this.el) {
      this.canvas.style.position = "absolute";
      this.canvas.style.top = "0";
      this.canvas.style.left = "0";
      this.canvas.style.zIndex = "-1";
      document.body.appendChild(this.canvas);
    }
    this.ctx = this.canvas.getContext("2d");
  }

  initCircles() {
    this.circles = [];
    for (let i = 0; i < this.options.circles; i++) {
      this.circles.push(
        new Circle({
          ...this.options,
          ctx: this.ctx,
        })
      );
    }
  }

  resize() {
    const {
      width,
      height
    } = (this.canvas.parentNode.getBoundingClientRect &&
      this.canvas.parentNode.getBoundingClientRect()) || {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = width;
    this.height = height;

    this.circles.forEach((circle) => circle.setSize(width, height));
  }

  render() {
    if (this.isWaiting) {
      window.requestAnimationFrame(() => this.render());
      return;
    }

    this.resize();

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.circles.forEach((circle) => circle.render());

    window.requestAnimationFrame(() => this.render());
  }
}

Vortex.DEFAULT_OPTIONS = {
  range: 7,
  speed: 1,
  circles: 80,
  radius: 1,
  waitFor: 500,
  el: null,
};

class Circle {
  constructor(options) {
    this.options = options;
    this.ctx = options.ctx;

    this.x = Math.random() * this.options.width;
    this.y = Math.random() * this.options.height;
    this.r = Math.random() * this.options.radius;
    this.c =
      "rgba(" +
      Math.floor(this.options.hue + 40 * Math.random()) +
      ", " +
      Math.floor(100 + 155 * Math.random()) +
      ", " +
      Math.floor(100 + 155 * Math.random()) +
      ", " +
      (Math.random() * 0.7 + 0.2) +
      ")";
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  render() {
    this.y -= Math.pow(this.options.range - this.r, 2) * 0.001 * this.options.speed;

    if (this.y < -this.r) {
      this.y = this.options.height + this.r;
      this.x = Math.random() * this.options.width;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.c;
    this.ctx.fill();
  }
}

export const VortexContainer = ({
  children,
  className,
  ...options
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const vortex = new Vortex({
        ...options,
        el: canvasRef.current,
      });
    }
  }, [canvasRef]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <canvas ref={canvasRef} className="absolute h-full w-full inset-0 -z-10" />
      <div className={cn("relative z-10 h-full w-full", className)}>
        {children}
      </div>
    </div>
  );
};
