export const formatNumber = (num: number): string => {
  if (num >= 1000000 || num <= -1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000 || num <= -1000) {
    return `${(num / 1000).toFixed(0)}k`;
  }
  return num.toFixed(0);
};
