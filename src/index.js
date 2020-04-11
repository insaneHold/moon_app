const http = require('./app')
require('./connection');

async function init() {
    await http.listen(process.env.PORT || 3000 );
    console.log('Server on localhost:3000')
}

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
  });


init();