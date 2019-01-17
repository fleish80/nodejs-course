const operators = {
  '+': require('./plus'),
  '-': require('./minus')
};
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout, null);

rl.question('First Number? ', a => {
  rl.question('Operator + or -', operator => {
    rl.question('Secon Number?', b => {
      console.log('operator', operator);
      const res = operators[operator](a, b);
      console.log(`${a}${operator}${b}=${res}`);
      rl.close();
    });
  });
});
