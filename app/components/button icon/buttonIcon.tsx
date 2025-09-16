import React from "react";
import { ButtonIconProps } from "./buttonIcon.type";
import { buttonIconStyle } from "./buttonIcon.style";
export const ButtonIcon: React.FC<ButtonIconProps> = ({
  shape = "round",
  width = "default",
  size = "sm",
  color = "filled",
  icon,
  className = "",
  ...props
}) => {
  return (
    <div
      className={buttonIconStyle({ shape, width, size, color, className })}
      {...props}
    >
      {icon}
    </div>
  );
};
