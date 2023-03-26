const inquirer = require('inquirer');
const Manager = require('../models/Manager');
const teamModule = require('../models/team');

function newManager() {
  return inquirer
    .prompt([
      {
        name: 'managerName',
        message: "Enter the team managers name.",
      },
      {
        name: 'managerId',
        message: "Enter the managers ID.",
      },
      {
        name: 'managerEmail',
        message: "Enter the managers email.",
      },
      {
        name: 'ManagerOfficeNumber',
        message: "Enter the managers office number.",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
      );
      teamModule.addMember(manager);
    });
}

module.exports = newManager;