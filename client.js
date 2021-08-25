const net = require("net");
const connect = function () {
  const conn = net.createConnection({ 
  host: '135.23.223.133', // change to IP address of computer or ngrok host if tunneling
  port: 50542 // or change to the ngrok port if tunneling
});

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

  return conn;
};
module.exports = connect
