const createStack = require("./stacks");

let tests = [
  "redivider",
  "defiled",
  "deified",
  "civic",
  "radar",
  "level",
  "rotor",
  "kayak",
  "racecar",
  "redder",
  "reddit",
  "madam",
  "madame",
  "refer",
  "referral",
  "Mr. owl ate my metal worm",
  "was it a car or a cat i saw",
  "murder for a jar of red rum",
  "Go hang a salami, i'm a lasagna hog",
  "Step on no pets.",
  "today is a sunny day"
];

tests.map(word => {
  let letters = createStack();

  // spaces don't count apparently
  let pword = word.replace(/[ \.*\,*'*]/g, "").toLowerCase();
  // a word reversed
  let rword = "";

  // index in out string is what we're looking at
  Array.from(pword).map(char => {
    letters.push(char);
  });

  // pop it all back out in reverse
  Array.from(pword).map(_ => {
    rword += letters.pop();
  });

  console.log(`is "${word}" a palindrome?: ${pword === rword}`);
});
