import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage
while (true) {
  rl.question("$ ", (answer) => {
    rl.write(`${answer}: command not found`);
    rl.close();
  });
}
