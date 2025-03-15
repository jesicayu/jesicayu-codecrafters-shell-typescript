import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Cannot use a while loop. rl.question is async and relies on the event loop to handle user input. Since rl.question() doesn't block the execution, it schedules a callback and returns immediately. The loop instantly runs again. You end up rapidly queuing up thousands (or more) of unanswered input prompts before the program can even respond to the first one.
function startPrompting() {
    rl.question("$ ", (answer) => {
        rl.write(`${answer}: command not found \n`);
        startPrompting();
    });
}
startPrompting();
