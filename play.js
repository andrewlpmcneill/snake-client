// const net = require("net");
const { connect } = require('./client');


console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('You have quit!');
    process.exit();
  }
};

setupInput();