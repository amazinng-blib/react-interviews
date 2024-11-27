//Pangram string checker

function checkPangram(str) {
  const arr = new Array(26).fill(false);

  let index;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z')
      index = str.charCodeAt(i) - 'A'.charCodeAt(0);
    else if (str[i] >= 'a' && str[i] <= 'z')
      index = str.charCodeAt(i) - 'a'.charCodeAt(0);
    else continue;

    arr[index] = true;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === false) {
      return false;
    }

    return true;
  }
}

const check = checkPangram('The over a lazy dog ');

console.log('c', check);
