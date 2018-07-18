export function convertRemToPixels(input) {   
  const baseUnit = 16;
  const stripUnits = input.replace(/px/g, '');
  const valueToConvert = stripUnits && Number(stripUnits);
  return `${valueToConvert / baseUnit}rem`;
}
