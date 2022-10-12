/*
 * Function will beep after a specified amount of time has passed.
 * The user can specify an unlimited number of alarms using command line arguments.
 * For example < node timer1.js 10 3 5 15 9 > will beep after 3 seconds, 5 seconds, 9 seconds, etc.
 *
 * Validation:
 * 1. No numbers are provided: Easy. It should just not beep at all and end immediately since
 *    no beeps should get scheduled.
 * 2. An input is a negative number: Ignore/skip any numbers that are negative.
 *    We can't schedule anything in the past.
 * 3. An input is not a number: Ignore/skip these as well, instead of attempting to call
 *    setTimeout with a non-number.
 */
const timer = function() {

  const beeps = process.argv.slice(2);

  for (const delay of beeps) {

    if (delay >= 0 && !Number.isNaN(delay)) {

      setTimeout(() => {

        process.stdout.write('\x07');
  
      }, delay * 1000);
    }
  }
};

timer();