import { ButtonHTMLAttributes, JSX } from "react";
import { VariantProps } from "tailwind-variants";
import { HTMLMotionProps } from "framer-motion";
import { button } from "./button.style";

type buttonVariant = VariantProps<typeof button>;
export type ButtonProps = Omit<HTMLMotionProps<"button">, "drag"> &
  buttonVariant & {
    label?: string;
    loading?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    children?: any;
  };
