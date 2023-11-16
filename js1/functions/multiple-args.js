function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}

getArea(20, 40, "sq meters");
