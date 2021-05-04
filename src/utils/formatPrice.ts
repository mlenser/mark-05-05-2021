const format = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
});

export const formatPrice = (value: number) => format.format(value);
