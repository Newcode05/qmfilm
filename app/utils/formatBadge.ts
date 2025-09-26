export const formatBadge = (label: number | string): number | string => {
  if (typeof label === "number") {
    if (label > 999) {
      return "999+";
    }
  }
  return label;
};
