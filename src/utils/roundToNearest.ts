export const roundToNearest = ({
  interval,
  value,
}: {
  interval: number;
  value: number;
}) => Math.round(value / interval) * interval;
