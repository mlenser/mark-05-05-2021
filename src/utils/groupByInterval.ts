export const groupByInterval = ({
  group,
  values,
}: {
  group: number;
  values: SizePrice[];
}) => {
  if (group === 0.5) {
    return values;
  }
  // TODO: group
  return values;
};
