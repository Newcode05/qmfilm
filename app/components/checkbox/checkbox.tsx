import React, { useState, useEffect } from "react";
import { CheckBoxProps } from "./checkbox.type";
import { CheckBoxStyle } from "./checkbox.style";

export const CheckBox: React.FC<CheckBoxProps> = ({
  variant = "primary",
  label = "Tomato",
  positionLabel = "end",
  checkedIcon,
  indeterminateIcon,
  checked = undefined,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  className = "",
  classNameContainer = "",
  classNameLabel = "",
  onChange = () => {},
  ...props
}) => {
  const [internal, setInternal] = useState<boolean>(defaultChecked);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const value = checked ?? internal;
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <label
      className={`group flex flex-row items-center gap-[24px] ${classNameContainer}`}
    >
      {positionLabel === "start" ? (
        <span className={`select-none ${classNameLabel}`}>{label}</span>
      ) : null}
      <div
        className={CheckBoxStyle({
          variant,
          selected: value,
          indeterminate,
          className,
        })}
        role="checkbox"
        aria-checked={value}
        aria-disabled={disabled}
      >
        <input
          ref={inputRef}
          aria-label={label}
          type="checkbox"
          className="w-0 h-0"
          checked={value}
          onChange={(e) => {
            if (checked === undefined) {
              setInternal((prev) => !prev);
            }
            onChange(e);
          }}
          disabled={disabled}
          {...props}
        />
        {indeterminate ? indeterminateIcon : value ? checkedIcon : null}
      </div>
      {positionLabel === "end" ? (
        <span className={`select-none ${classNameLabel}`}>{label}</span>
      ) : null}
    </label>
  );
};
