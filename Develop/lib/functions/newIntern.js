const inquirer = require('inquirer');
const Intern = require('../models/Intern');
const teamModule = require('../models/team');


function newIntern() {
  return inquirer
    .prompt([
      {
        name: 'internName',
        message: "Please enter the intern's name.",
      },
      {
        name: 'internId',
        message: "Please enter the intern's ID.",
      },
      {
        name: 'internEmail',
        message: "Please enter the intern's email.",
      },
      {
        name: 'internGithub',
        message: "Please enter the intern's GitHub username.",
      },
    ])
    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internGithub
      );
      teamModule.addMember(intern);
    });
}

module.exports = newIntern;