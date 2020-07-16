// String to Word Array
// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"] .
function stringToWordArr(str){
  let currentStr = "";
  let index = 0;
  let newArr = [];
  while(index < str.length+1){
      if(str[index] === ' ' || str[index] === undefined){
          if(currentStr.length > 0){
              newArr.push(currentStr)
          }
          currentStr = "";
      } else{
          currentStr+=str[index];
          console.log("this index on else", currentStr);
      }
      index+=1;
  }
  return newArr;
}
console.log(stringToWordArr("with spaces, tabs and linefeeds  "));

// Reverse Word Order
// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. Given "This is a test", return "test a is This".”
// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” Apple Books.
function reverseStringToWord(str){
  let x = 0;
  let y = 1;
  let currentStr = "";
  let index = 0;
  let newArr = [];
  while(index < str.length+1){
    if(str[index] === ' ' || str[index] === undefined){
        if(currentStr.length > 0){
            newArr.push(currentStr)
        }
        currentStr = "";
    } else{
        currentStr+=str[index];
        console.log("this index on else", currentStr);
    }
    index+=1;
  }
  console.log(newArr);
    while(x < newArr.length/2){
      let temp = newArr[x];
      newArr[x] = newArr[newArr.length -y];
      newArr[newArr.length - y] = temp;
      y++;
      x++;
    }
    return newArr
}
// console.log(reverseStringToWord("This is a test"));

function longWord(str) {
  let currentLong= "";

  let thisArr = reverseStringToWord(str);
  for(let index = 0; index < thisArr.length; index++) {
    if(currentLong.length < thisArr[index].length){
      currentLong = thisArr[index];
    }
  }
  console.log(currentLong)
  return thisArr
}
console.log(longWord("this is a stringgggg"))

// Unique Words
// “Given a string, retain words that occur only once. Given "Sing! Sing a song; sing out loud; sing out strong.",
// return "Sing! Sing a song; loud; strong". Punctuation is part of the word: "Sing!" is not "Sing".
// Bonus: ignore punctuation and capitalization. Ex.: given "Sing a song! Sing a song; sing out loud and strong.", return "out loud and strong".”
// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” Apple Books.

function uniqueWords(str) {
  let uniqueStr = ""
  let thisArr = reverseStringToWord(str);
  let currentStr= thisArr[0];
  for(let index = 0; index < thisArr.length; index++) {
    // console.log('1111111111111111111111', currentStr, thisArr[index], index)
    currentStr = thisArr[index];
    let i = 0
    for(;i < thisArr.length; i++){
      // console.log('222222222222222222222', currentStr, thisArr[i])
      if(currentStr === thisArr[i] && index !== i){
        // console.log(currentStr);
        break;
      }
    }
    if(currentStr !== thisArr[i] && index !== i){
      console.log(currentStr);
      uniqueStr+=currentStr +' ';
      console.log(uniqueStr);
    }
  }
  return uniqueStr.trim();
};
// console.log(uniqueWords("Sing! Sing a song; sing out loud; sing out strong."));

// Censor
// Create a function that, given string and array of ‘naughty words’, returns new string with naughty words changed to “x” chars. Given ("Snap crackle pop nincompoop!", ["crack", "poop"]), you should return "Snap xxxxxle pop nincomxxxx!" (after giggling a little bit).
// Second: handle capitalization appropriately”
// Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” Apple Books.

function censor(str, arr) {
  for(let i = 0; i < arr.length; i++){
    const word = arr[i];
    console.log(word)
    for(let j = 0; j < str.length; j++){
      if(startPostion(str, word, j)) {
        console.log(str = replaceStr(str, word, j))
      }
    }
  }
  return str;
}
censor("Snap crackle pop nincompoop!", ["crack", "poop"])

function startPostion(str, word, postion){
  for(let c = 0; c < word.length; c++){
    if (str[postion + c] !== word[c]){
      return false;
    }
  }
  return true;
}

function replaceStr(str, word, postion){
  let stringIng= "";
  for(let b = 0; b < str.length; b++){
    if(b >= postion && b < word.length + postion) {
      stringIng+="x";
    }
    else {
      stringIng+=str[b];
    }
  }
  return stringIng;
}
