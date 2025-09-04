import { useEffect, useRef, useCallback } from "react";
import "./ripple.css";
type Ripple = {
  span: HTMLSpanElement;
  busy: boolean;
};

export const useRipple = <T extends HTMLElement>(
  poolSize = 5,
  className = ""
) => {
  const containerRef = useRef<T | null>(null);
  const ripplePool = useRef<Ripple[]>([]);
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.classList.add("overflow-hidden");
    const pool: Ripple[] = [];
    for (let i = 0; i < poolSize; i++) {
      const span = document.createElement("span");
      span.classList.add("ripple");
      if (className !== "") {
        span.classList.add(...className.split(" "));
      }
      containerRef.current.appendChild(span);
      pool.push({ span: span, busy: false });
    }
    ripplePool.current = pool;
    return () => {
      pool.forEach((r) => r.span.remove());
    };
  }, [poolSize]);
  const createRipple = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const ripple = ripplePool.current.find((r) => !r.busy);
    if (!ripple) return;
    ripple.busy = true;
    const rect = container.getBoundingClientRect();
    const size = Math.sqrt(rect.width ** 2 + rect.height ** 2);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    Object.assign(ripple.span.style, {
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
    });
    ripple.span.classList.add("active");
    setTimeout(() => {
      ripple.span.classList.remove("active");
      ripple.busy = false;
    }, 600);
  }, []);
  return { containerRef, createRipple };
};
