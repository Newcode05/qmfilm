import React from "react";
import "./Skeleton.css";
export type SkeletonProps = {
  className?: string;
  width?: string;
  height?: string;
  rounded?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  width = "w-[150px]",
  height = "h-[50px]",
  rounded = "rounded-[10px]",
}) => {
  return (
    <div
      className={`bg-gray-500 skeleton ${width} ${height} ${rounded} ${className}`}
    ></div>
  );
};
