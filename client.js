const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Welcome and name declaration connect callback
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: ALM');
  });

  // Movement connect callback
  conn.on('connect', () => {
    // setInterval(() => conn.write('Move: up'), 500);
    // setTimeout(() => setInterval(() => conn.write('Move: left'), 500), 250);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};