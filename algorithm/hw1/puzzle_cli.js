const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'game> '
});

var Game = require('./game.js');
var game = new Game();
game.print();
console.log('You can move: ' + game.available());

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
	case 'bye':
	case 'exit':
	  rl.close();
   	  break;
    default:
      console.log(`Swap '${line.trim()}'`);
	  game.swap(parseInt(line));
	  game.print();
	  console.log('You can move: ' + game.available());
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
