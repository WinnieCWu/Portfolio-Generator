// const profileDataArgs = process.argv.slice(2);
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //replace with one-liner using assignment destructuring
// const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     //This..
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('==========');

//     //is the same as this..
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
  
// printProfileData(profileDataArgs);

//return a string (to create HTML template)
// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

// ---need the bottom code occasionally.. keep const at top of page--
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw (err);
//   console.log('Portfolio complete! Check out index.html to see the output!')
// });
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));