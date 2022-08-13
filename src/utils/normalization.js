export const normalizeNumber = number =>
  number
    .split('')
    .map(numSymb => (!isNaN(numSymb) && numSymb !== ' ' && numSymb) || null)
    .join('');

export const normalizeFilterValue = filterValue => {
  const prenormalizedFilterValue = filterValue.trim().toLowerCase();

  if (
    !isNaN(prenormalizedFilterValue[0]) ||
    prenormalizedFilterValue[0] === '+' ||
    prenormalizedFilterValue[0] === ')' ||
    prenormalizedFilterValue[0] === '(' ||
    prenormalizedFilterValue[0] === '-'
  )
    return normalizeNumber(prenormalizedFilterValue);

  return prenormalizedFilterValue;
};

export const normalizeNumberForCallLink = number =>
  number
    .split('')
    .map(
      numSymb =>
        (((!isNaN(numSymb) && numSymb !== ' ') || numSymb === '+') &&
          numSymb) ||
        null
    )
    .join('');
