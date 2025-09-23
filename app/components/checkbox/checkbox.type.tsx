import { VariantProps } from "tailwind-variants";
import { CheckBoxStyle } from "./checkbox.style";

type CheckBoxVariant = VariantProps<typeof CheckBoxStyle>;
export type CheckBoxProps = CheckBoxVariant & {
  icon: React.ReactNode;
  className: string;
};
