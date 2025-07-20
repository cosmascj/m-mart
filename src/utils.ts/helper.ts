export const formatThousand = (value) => {
  let formattedValue = typeof value === 'number' ? String(value) : value;

  const result = parseFloat(formattedValue)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return result;
};