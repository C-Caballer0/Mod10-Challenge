const newManager = require('./lib/functions/newManager');
const menu = require('./lib/menu');

function init() {
  console.log('Team Profile Manager - Initializing');

 newManager().then(menu);
}

init();