export const shortestPalindrome = function (s: string) {
  const r = s.split('').reverse().join('');

  for (let i = 0; i < s.length + 1; i++) {
    if (s.startsWith(r.substring(i))) {
      return r.substring(0, i) + s;
    }
  }
  return s;
};
