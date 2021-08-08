const API_URL = 'https://610100ba1d56e10017394cf2.mockapi.io/resume/my/resume';
async function fetchUsers() {

   const response = await fetch(API_URL)
   const users = await response.json();
   console.log(users)
  for(user of users)
    console.log(user.name)
    console.log(user.career)
}

fetchUsers();


TASK 
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)

console.log(odds)

//prime number
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) 
      return false;
  }
  return true;
});

console.log(numArray);
//caps
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(' '))
}
titleCase("good work");
// sum of array
let arr = [1,2,3,4,5];

let sum = 0;

for (let num of arr){

    sum = sum + num
}
console.log(sum)
// prime numbers
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);
// palindrome
const arr = ['mom', 13445, 12321, 'dad', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));
