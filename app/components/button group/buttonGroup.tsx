import React from "react";
import { buttonGroupProps } from "./buttonGroup.type";
import { buttonGroupStyle } from "./buttonGroup.style";

export const ButtonGroup: React.FC<buttonGroupProps> = ({
  childern,
  className = "",
  type = "standard",
  size = "sm",
  ...props
}) => {
  return (
    <div className={buttonGroupStyle({ type, size, className })} {...props}>
      {childern}
    </div>
  );
};
