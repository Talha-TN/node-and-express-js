import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const todo = [];
const showMenu = () => {
  console.log("1: Add tasks");
  console.log("2: view tasks");
  console.log("3: Exit");
  rl.question("Choose an option ", handleInput);
};
const handleInput = (option) => {
  if (option === "1") {
    rl.question("enter the task ", (task) => {
      todo.push(task);
      console.log("Task added : ", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("Your todo list : ");
    todo.forEach((task, index) => {
      console.log(index + 1, ">>>", task);
    });
    showMenu();
  } else if (option === "3") {
    console.log("good bye!");
    rl.close();
  } else {
    console.log("Invalid input! select number between 1 to 3");
    showMenu();
  }
};
showMenu();
