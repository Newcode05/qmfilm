import React from "react";
import { VariantProps } from "tailwind-variants";
import { fab } from "./fab.style";
import { ripple } from "./fab.style";

type FabVariant = VariantProps<typeof fab>;
type RippleVariant = VariantProps<typeof ripple>;
export type FabProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RippleVariant &
  FabVariant & {
    icon: React.ReactNode;
    label?: string;
  };
