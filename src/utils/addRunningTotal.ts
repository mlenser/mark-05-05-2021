export const addRunningTotal = (values: SizePrice[]) =>
  values.reduce((accumulator: SizePrice[], currentValue: SizePrice) => {
    const currentSize = currentValue[1];
    const lastItemInAccumulator = accumulator[accumulator.length - 1];
    const previousTotal = Array.isArray(lastItemInAccumulator)
      ? lastItemInAccumulator[2]
      : 0;
    const runningTotal = previousTotal + currentSize;

    const newArray = [...currentValue, runningTotal];

    return [...accumulator, newArray];
  }, []);
