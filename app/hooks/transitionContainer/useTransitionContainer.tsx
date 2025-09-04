import { useState, useRef, useCallback } from "react";

interface OverlayState {
  top: string;
  left: string;
  width: string;
  height: string;
  borderRadius: string;
  background: string;
  boxShadow: string;
  transitioning: boolean;
}

export const useTransitionContainer = (duration: number = 200) => {
  const originRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [overlay, setOverlay] = useState<OverlayState | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExtend, setIsExtend] = useState<boolean>(false);

  const getRectAndStyle = (
    el: HTMLElement
  ): Omit<OverlayState, "transitioning"> => {
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      borderRadius: style.borderRadius,
      background: style.backgroundColor,
      boxShadow: style.boxShadow,
    };
  };
  const open = useCallback(() => {
    if (!originRef.current || !targetRef.current) return;

    const origin = getRectAndStyle(originRef.current);
    const target = getRectAndStyle(targetRef.current);

    setOverlay((prev) => {
      setIsOpen(true);
      return { ...origin, transitioning: false };
    });

    requestAnimationFrame(() => {
      setOverlay({ ...target, transitioning: true });
    });
    setTimeout(() => {
      setOverlay(null);
      setIsExtend(true);
    }, 200);
  }, []);

  const close = useCallback(() => {
    if (!originRef.current || !targetRef.current) return;

    const origin = getRectAndStyle(originRef.current);
    const target = getRectAndStyle(targetRef.current);

    setOverlay({ ...target, transitioning: false });

    requestAnimationFrame(() => {
      setOverlay({ ...origin, transitioning: true });
    });

    setTimeout(() => {
      setOverlay(null);
      setIsExtend(true);
    }, 10000);
  }, [duration]);

  const overlayNode = overlay && (
    <div
      style={{
        position: "fixed",
        top: overlay.top,
        left: overlay.left,
        width: overlay.width,
        height: overlay.height,
        borderRadius: overlay.borderRadius,
        background: overlay.background,
        boxShadow: overlay.boxShadow,
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        zIndex: 9999,
      }}
      onClick={open}
    ></div>
  );

  return { originRef, targetRef, isOpen, isExtend, open, close, overlayNode };
};
