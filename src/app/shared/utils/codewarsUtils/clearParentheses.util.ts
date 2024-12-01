export const clearParentheses = function (charString: string): string {
  let filteredString: string = '';
  let openParentheses: number = 0;
  for (let char of charString) {
    if (char === '(') {
      openParentheses++;
    } else if (char === ')' && openParentheses > 0) {
      openParentheses--;
    } else if (openParentheses === 0) {
      filteredString += char;
    }
  }

  return filteredString;
};
