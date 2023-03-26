const inquirer = require('inquirer');

const newEngineer = require('./functions/newEngineer');
const newIntern = require('./functions/newIntern');
const renderPage = require('./functions/renderPage');


function menu() {
  return inquirer
    .prompt({
      name: 'option',
      message: 'Please select an option.',
      type: 'list',
      choices: [
        {
          name: 'Add a new engineer',
          value: 'engineer',
        },
        {
          name: 'Add a new intern',
          value: 'intern',
        },
        {
          name: 'Finalize Team',
          value: 'exit',
        },
      ],
    })
    .then((choice) => {
      switch (choice.option) {
        case 'engineer':
          newEngineer().then(menu);
          break;
        case 'intern':
          newIntern().then(menu);
          break;
        default:
          renderPage().then(() => {
            console.log('Team profile generated successfully!');
            process.exit();
          });
      }
    })
    .catch((err) => console.log(err));
}

module.exports = menu;