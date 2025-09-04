import { ButtonHTMLAttributes, JSX } from "react";
import { VariantProps } from "tailwind-variants";
import { button } from "./button.variant";

type buttonVariant = VariantProps<typeof button>;
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  buttonVariant & {
    label?: string;
    loading?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    children?: any;
  };
