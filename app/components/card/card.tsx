import React from "react";
import { CardProps } from "./card.type";
import { CardStyle } from "./card.style";

export const Card: React.FC<CardProps> = ({
  className,
  variant = "elevated",
  children,
  ...props
}) => {
  return (
    <div className={CardStyle({ variant, className })} {...props}>
      {children}
    </div>
  );
};
