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
