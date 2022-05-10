const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
*/

let arr = [];

const question1 =rl.question("What's your name? Nicknames are also acceptable ", (nickname) => {
  callback(nickname);
  question2();
});

const question2 = () => rl.question("What's an activity you like doing? ", (activity) => {
  callback(activity);
  question3();
});

const question3 = () => rl.question("What do you listen to while doing that? ", (music) => {
  callback(music);
  question4();
});

const question4 = () => rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
  callback(meal);
  question5();
});

const question5 = () =>rl.question("What's your favourite thing to eat for that meal? ", (eat) => {
  callback(eat);
  question6();
});

const question6 = () =>rl.question("Which sport is your absolute favourite? ", (sport) => {
  callback(sport);
  question7();
});

const question7 = () =>rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
  callback(superpower);
  tellus();
});

const callback = (input) => {
  console.log("Thanks for the input!");
  arr.push(input);
  rl.close();

}

const tellus = () => {
console.log(`Thanks for the feedback ${arr[0]}! We now know that your favorite activity is ${arr[1]} while listening to ${arr[2]}! Your favorite meal is ${arr[3]} and favorite food is ${arr[4]}. You love ${arr[5]} and you have a superpower of ${arr[6]}`);
};



