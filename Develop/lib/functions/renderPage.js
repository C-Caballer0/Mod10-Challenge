const path = require('path');
const fs = require('fs').promises;
const pageTemplate = require('./template/webTemplate');
const myTeam = require('../models/Team');
const { resolve } = require('path');
const filePath = path.join(__dirname, 'team.html');

function renderPage() {
  const htmlBlock = pageTemplate(myTeam.team);
  
  return new Promise(resolve)
    .then(() => fs.writeFile(filePath, htmlBlock))
    .then(() => console.log(' file successfully generated!'))
    .catch((err) => console.log(err));
}

module.exports = renderPage;