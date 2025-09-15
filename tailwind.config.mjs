/** @type {import('tailwindcss').Config} */
import button from "./app/token/button/button.json";

import fab from "./app/token/fab/fab.json";
import fabExtend from "./app/token/fab/fabExtend.json";

import searchBar from "./app/token/search/searchBar.json";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          container: "var(--color-primary-container)",
          "container-hover": "var(--color-primary-container-hover)",
          "container-active": "var(--color-primary-container-active)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)",
          active: "var(--color-secondary-active)",
          container: "var(--color-secondary-container)",
          "container-hover": "var(--color-secondary-container-hover)",
          "container-active": "var(--color-secondary-container-active)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          hover: "var(--color-tertiary-hover)",
          active: "var(--color-tertiary-active)",
          container: "var(--color-tertiary-container)",
          "container-hover": "var(--color-tertiary-container-hover)",
          "container-active": "var(--color-tertiary-container-active)",
        },
        neutral: {
          0: "var(--color-neutral-0)",
          10: "var(--color-neutral-10)",
          20: "var(--color-neutral-20)",
          30: "var(--color-neutral-30)",
          40: "var(--color-neutral-40)",
          50: "var(--color-neutral-50)",
          60: "var(--color-neutral-60)",
          70: "var(--color-neutral-70)",
          80: "var(--color-neutral-80)",
          90: "var(--color-neutral-90)",
          95: "var(--color-neutral-95)",
          99: "var(--color-neutral-99)",
          100: "var(--color-neutral-100)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          active: "var(--color-surface-active)",
          dim: "var(--color-surface-dim)",
          bright: "var(--color-surface-bright)",
          variant: "var(--color-surface-variant)",
          "container-lowest": "var(--color-surface-container-lowest)",
          "container-low": "var(--color-surface-container-low)",
          container: "var(--color-surface-container)",
          "container-high": "var(--color-surface-container-high)",
          "container-highest": "var(--color-surface-container-highest)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          hover: "var(--color-danger-hover)",
          active: "var(--color-danger-active)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          hover: "var(--color-warning-hover)",
          active: "var(--color-warning-active)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          hover: "var(--color-success-hover)",
          active: "var(--color-success-active)",
        },
        on: {
          primary: "var(--color-on-primary)",
          "primary-container": "var(--color-on-primary-container)",
          surface: "var(--color-on-surface)",
          "surface-variant": "var(--color-on-surface-variant)",
        },
        outline: {
          DEFAULT: "var(--color-outline)",
        },
      },
      textColor: {
        base: "#F5F5F5",

        "on-primary": "var(--color-on-primary)",
        "on-primary-container": "var(--color-on-primary-container)",

        "on-secondary": "var(--color-on-secondary)",
        "on-secondary-container": "var(--color-on-secondary-container)",

        "on-tertiary": "var(--color-on-tertiary)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-dark": "var(--color-on-surface-dark)",

        "on-darger": "var(--color-on-danger)",
        "on-warning": "var(--color-on-warning)",
        "on-success": "var(--color-on-success)",
        dark: "#111827",
        infor: "#D1D5DB",
        hover: "#A1A1AA",
      },
      backgroundColor: {},
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        ...button.fontsize,
        ...fabExtend.fontSize,
        ...searchBar.fontSize,
        "body-large": [
          "var(--typescale-body-large-size)",
          {
            fontWeight: "var(--typescale-body-large-weight)",
            lineHeight: "var(--typescale-body-large-line-height)",
            letterSpacing: "var(--typescale-body-large-tracking)",
          },
        ],
      },
      height: {
        ...button.height,
        ...fabExtend.height,
        ...searchBar.height,
      },
      width: {
        ...fab.width,
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem", //12px
        4: "1rem", //16px
        5: "1.25rem", //20px
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        ...button.spacing,
        ...fabExtend.spacing,
        ...searchBar.spacing,
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "3rem",
        full: "9999px",
        ...button.borderRadius,
        ...fab.borderRadius,
        ...fabExtend.borderRadius,
        ...searchBar.borderRadius,
      },
      boxShadow: {
        soft: "0 1.5px 8px 2px rgba(0, 0, 0, 0.08)",
        medium: "0 4px 12px rgba(0, 0, 0, 0.1)",
        strong: "0 8px 24px rgba(0, 0, 0, 0.12)",
        elevation0: "none",
        elevation1:
          "0px 1px 3px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
        elevation2:
          "0px 3px 6px rgba(0,0,0,0.2), 0px 3px 6px rgba(0,0,0,0.14), 0px 1px 3px rgba(0,0,0,0.12)",
        elevation3:
          "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
        elevation4:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        elevation5:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
        elevation6:
          "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
        elevation7:
          "0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)",
        elevation8:
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
        eleavtion9:
          "0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12)",
        elevation10:
          "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        "expressive-fast-spatial": "var(--animation-expressive-fast-spatial)",
        "expressive-default-spatial":
          "var(--animation-expressive-default-spatial)",
        "expressive-slow-spatial": "var(--animation-expressive-slow-spatial)",

        "expressive-fast-effects": "var(--animation-expressive-fast-effects)",
        "expressive-default-effects":
          "var(--animation-expressive-default-effects)",
        "expressive-slow-effects": "var(--animation-expressive-slow-effects)",

        "standard-fast-spatial": "var(--animation-standard-fast-spatial)",
        "standard-default-spatial": "var(--animation-standard-default-spatial)",
        "standard-slow-spatial": "var(--animation-standard-slow-spatial)",

        "standard-fast-effects": "var(--animation-standard-fast-effects)",
        "standard-default-effects": "var(--animation-standard-default-effects)",
        "standard-slow-effects": "var(--animation-standard-slow-effects:)",
      },
      transitionDuration: {
        short1: "var(--animation-duration-short1)",
        short2: "var(--animation-duration-short2)",
        short3: "var(--animation-duration-short3)",
        short4: "var(--animation-duration-short4)",

        medium1: "var(--animation-duration-medium1)",
        medium2: "var(--animation-duration-medium2)",
        medium3: "var(--animation-duration-medium3)",
        medium4: "var(--animation-duration-medium4)",

        long1: "var(--animation-duration-long1)",
        long2: "var(--animation-duration-long2)",
        long3: "var(--animation-duration-long3)",
        long4: "var(--animation-duration-long4)",

        extralong1: "var(--animation-duration-extralong1)",
        extralong2: "var(--animation-duration-extralong2)",
        extralong3: "var(--animation-duration-extralong3)",
        extralong4: "var(--animation-duration-extralong4)",
      },
    },
  },
  plugins: [],
};
