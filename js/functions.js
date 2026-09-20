// функция для проверки длинны строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

// console.log(checkStringLength('Привет', 10)); // true
// console.log(checkStringLength('Привет', 5)); // false


/* Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза,
которые одинаково читаются и слева направо и справа налево.
*/
function isPalindrome(string) {
  const cleanedStr = string.toLowerCase().replaceAll(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// console.log(isPalindrome('Лёша на полке клопа нашёл')); // true
// console.log(isPalindrome('Привет')); // false
