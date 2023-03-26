const inquirer = require('inquirer');
const Engineer = require('../models/Engineer');
const teamModule = require('../models/team');


function newEngineer() {
  return inquirer
    .prompt([
      {
        name: 'engineerName',
        message: "Please enter the engineer's name.",
      },
      {
        name: 'engineerId',
        message: "Please enter the engineer's ID.",
      },
      {
        name: 'engineerEmail',
        message: "Please enter the engineer's email.",
      },
      {
        name: 'engineerGithub',
        message: "Please enter the engineer's GitHub username.",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.internEmail,
        data.engineerGithub
      );
      teamModule.addMember(engineer);
    });
}

module.exports = newEngineer;