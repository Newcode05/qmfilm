import React from "react";

type SearchSuggestionItemProps = {
  className?: string;
  icon?: React.ReactNode;
  label?: string;
};
export const SearchSuggestionItem: React.FC<SearchSuggestionItemProps> = ({
  className = "",
  icon,
  label = "Camera",
}) => {
  return (
    <div
      className={`min-w-[360px] min-h-[56px] flex flex-row justify-start items-center px-[16px] gap-[16px] text-on-surface bg-surface-container-high ${className}`}
    >
      {icon}
      {label}
    </div>
  );
};
