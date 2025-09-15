import React from "react";
import { VariantProps } from "tailwind-variants";
import { HTMLMotionProps } from "framer-motion";
import { fabStyle } from "./fab.style";
import { ripple } from "./fab.style";

type FabVariant = VariantProps<typeof fabStyle>;
type RippleVariant = VariantProps<typeof ripple>;
export type FabProps = Omit<HTMLMotionProps<"button">, "darg"> &
  RippleVariant &
  FabVariant & {
    icon: React.ReactNode;
    label?: string;
  };
