import { forwardRef } from "react";
import { motion } from "framer-motion";
import { SearchViewProps } from "./SearchView.type";
import { searchViewStyle } from "./SearchView.style";

export const SearchView = forwardRef<HTMLDivElement, SearchViewProps>(
  (props, ref) => {
    const {
      color = "surface",
      className = "",
      leadingIcon,
      trailingIcon,
      ...prop
    } = props;
    return (
      <motion.div
        ref={ref}
        className={searchViewStyle({ color, role: "container", className })}
        {...prop}
      >
        <div className={searchViewStyle({ color: "none", role: "header" })}>
          {leadingIcon}
          <input
            placeholder="Search text"
            className={searchViewStyle({ color: "none", role: "input" })}
          />
          {trailingIcon}
        </div>
        <hr className={searchViewStyle({ color: "none", role: "divided" })} />
        <div></div>
      </motion.div>
    );
  }
);

SearchView.displayName = "SearchView";
