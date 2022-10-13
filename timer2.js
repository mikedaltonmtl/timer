const readline = require('readline');

const rl = readline.createInterface(
  process.stdin, process.stdout);

console.log(`Press 'b' to beep immediately or use a number key for a delayed sound (ctrl + c to exit).`);
readline.emitKeypressEvents(process.stdin);

process.stdin.on('keypress', (char, key) => {

  // listen for 'b': output immediate beep
  if (char === 'b') process.stdout.write('\x07');

  // listen for number keys (1 - 9): delayed beep
  // UTF-16 code units: 1 = 49, 9 = 57
  if (char.charCodeAt(0) >= 49 && char.charCodeAt(0) <= 57) {

    console.log(`\nsetting timer for ${char} seconds...`);

    setTimeout(() => {

      process.stdout.write('\x07');

    }, (char.charCodeAt(0) - 48) * 1000);

  }

  // listen for 'ctrl + c' : exit the program
  if (key && key.ctrl && key.name === 'c') {

    console.log(`\nThanks for using me, ciao!`);
    rl.close();
  }
});

/* ------------------------------------------------ keep examples in for future reference ---
readline.question('What is your age? ', (age) => {
  console.log('Your age is: ' + age);
  readline.close();
});
*/
/* 'line event invoked when ENTER is pressed'
readline.setPrompt(`What is your age? `);
readline.prompt();
readline.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
    readline.close();
});
 */