const { PeerServer } = require('peer');
const PORT = process.env.PORT || 3000;
PeerServer({ port: PORT, path: '/' });
console.log('PeerServer running on port ' + PORT);
