const compareStringLength = (string, length) => string.length <= length;

compareStringLength('проверяемая строка', 20); // true
compareStringLength('проверяемая строка', 18); // true
compareStringLength('проверяемая строка', 10); // false

const isPalindrome = (string) => {
  let newString = '';
  const normalizedString = string.toLowerCase().replaceAll(' ', '');

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }

  return normalizedString === newString;
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false

const getNumbers = (string) => {
  let numberStr = '';

  let normalizedString;

  if (typeof string === 'number') {
    normalizedString = string.toString();
  } else {
    normalizedString = string.replaceAll(' ', '');
  }

  for (let i = 0; i < normalizedString.length; i++) {
    if (!isNaN(normalizedString[i])) {
      numberStr += normalizedString[i];
    }
  }

  if (numberStr === '') {
    return 'NaN';
  }
  return parseInt(numberStr, 10);
};


getNumbers('2023 год');
