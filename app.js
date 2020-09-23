// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };
// console.log(name, github);
// console.log(generatePage(name, github));
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;
  console.log('Portfolio complete! Check out index.html to see the output!')
});