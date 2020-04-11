const http = require('./app')
require('./connection');

async function init() {
    await http.listen(process.env.PORT);
    console.log('Server on localhost')
}

init();