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