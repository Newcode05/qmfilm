import React, { cloneElement } from "react";

export const useTransitionContainer = () => {
  const animate = (
    fromRef: React.RefObject<HTMLElement | null>,
    toRef: React.RefObject<HTMLElement | null>,
    options?: {
      duration?: number;
      easing?: string;
    },
    onDone?: () => void
  ) => {
    if (!fromRef.current || !toRef.current) return;

    const fromNode = fromRef.current;
    const toNode = toRef.current;

    let fromNodeStyle = getComputedStyle(fromNode);
    let toNodeStyle = getComputedStyle(toNode);

    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();
    const duration = options?.duration ?? 0.3;
    const easing = options?.easing ?? "cubic-bezier(0.4,0,0.2,1)";

    const cloneNode = fromRef.current.cloneNode(false) as HTMLElement;
    cloneNode.className = "";
    fromNode.style.opacity = "0";
    fromNode.style.pointerEvents = "none";
    Object.assign(cloneNode.style, {
      transition: `top ${duration}s ${easing}, left ${duration}s ${easing}, width ${duration}s ${easing}, height ${duration}s ${easing}, opacity ${duration}s ${easing}`,
      position: "fixed",
      top: `${fromRect.top}px`,
      left: `${fromRect.left}px`,
      width: `${fromRect.width}px`,
      height: `${fromRect.height}px`,
      padding: fromNodeStyle.padding,
      borderRadius: fromNodeStyle.borderRadius,
      backgroundColor: fromNodeStyle.backgroundColor,
      opacity: "1",
      zIndex: "9999",
    });
    document.body.appendChild(cloneNode);
    console.log(cloneNode.className, cloneNode.style);
    Object.assign(toNode.style, {
      transition: "opacity 0.15s ease-in-out",
    });
    requestAnimationFrame(() => {
      Object.assign(cloneNode.style, {
        position: "fixed",
        top: `${toRect.top}px`,
        left: `${toRect.left}px`,
        width: `${toRect.width}px`,
        height: `${toRect.height}px`,
        backgroundColor: toNodeStyle.backgroundColor,
        borderRadius: toNodeStyle.borderRadius,
        opacity: "0",
        visibility: "visible",
        zIndex: "9999",
      });

      toNode.style.transition = `opacity ${duration}s ${easing}`;
      toNode.style.opacity = "1";
    });

    setTimeout(() => {
      onDone?.();
      cloneNode.remove();
    }, 300);
  };
  return animate;
};
