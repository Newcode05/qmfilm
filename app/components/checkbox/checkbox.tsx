import React from "react";
import { CheckBoxProps } from "./checkbox.type";
import { CheckBoxStyle } from "./checkbox.style";

export const CheckBox: React.FC<CheckBoxProps> = ({
  icon,
  className = "",
  ...props
}) => {
  return (
    <label className={CheckBoxStyle({ className })}>
      <input type="checkbox" className="w-0 h-0 border border-black" />
      {icon}
    </label>
  );
};
