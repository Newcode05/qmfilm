import { VariantProps } from "tailwind-variants";
import { CheckBoxStyle } from "./checkbox.style";
import { InputHTMLAttributes } from "react";

type CheckBoxVariant = VariantProps<typeof CheckBoxStyle>;
export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> &
  CheckBoxVariant & {
    label?: string;
    positionLabel?: "start" | "end";
    defaultChecked?: boolean;
    checked?: boolean;
    checkedIcon: React.ReactNode;
    indeterminate?: boolean;
    indeterminateIcon?: React.ReactNode;
    classNameContainer?: string;
    classNameLabel?: string;
  };
