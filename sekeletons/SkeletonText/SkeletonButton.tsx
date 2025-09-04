import React from "react";

type SkeletonButtonProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
};
const style: Record<"xs" | "sm" | "md" | "lg" | "xl", string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};
export const SkeletonButton: React.FC<SkeletonButtonProps> = ({
  className = "",
  size = "md",
  label = "Button",
}) => {
  return (
    <div
      className={`skeleton text-transparent pointer-events:none rounded select-none ${style[size]} ${className}`}
    >
      {label}
    </div>
  );
};
