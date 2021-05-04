const format = new Intl.NumberFormat('en-US');

export const formatNumber = (value: number) => format.format(value);
