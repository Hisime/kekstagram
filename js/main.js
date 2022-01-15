function getRandomInteger(min, max) {
  if (min >= 0 && max >= 0) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  return 'Диапазон может быть только положительный, включая ноль';
}


const isMaxLength = (string, maxLength) => {
  if (string.length >= maxLength) {
    return false;
  }
  return true;
};

isMaxLength('lolkek', 2);
getRandomInteger(1, 100);
