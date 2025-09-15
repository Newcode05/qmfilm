import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, HTMLAttributes } from "react";

type SearchViewProps = HTMLAttributes<HTMLDivElement>;

export const SearchView = forwardRef<HTMLDivElement, SearchViewProps>(
  (props, ref) => {
    const { className } = props;
    return (
      <div
        ref={ref}
        className={`bg-surface-container-high ${className}`}
      >
        <div className="h-[56px] flex flex-row gap-[16px] px-[16px] pt-[16px] text-on-surface items-start">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "inherit", fontSize: "24px" }}
          />
          <input
            placeholder="Search text"
            className="outline-none flex-1 text-body-large text-on-surface"
          />
          <FontAwesomeIcon
            icon={faXmark}
            style={{
              color: "var(--color-on-surface-variant)",
              fontSize: "24px",
            }}
          />
        </div>
        <hr className="h-[1px] bg-outline border-none" />
        <div></div>
      </div>
    );
  }
);

SearchView.displayName = "SearchView";
