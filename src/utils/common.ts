export const formatNumbering = (pokemonIndex: number | string): string =>
  `#${(typeof pokemonIndex === 'number'
    ? String(pokemonIndex)
    : pokemonIndex
  ).padStart(3, '0')}`;

export const getMin = (min: number): number => {
  return min * 60 * 1000;
};

export const getMeter = (centimeters: number): number => {
  const meters = centimeters / 10;
  return meters;
};

export const getKilogram = (grams: number): number => {
  const kilograms = grams / 10;
  return kilograms;
};
