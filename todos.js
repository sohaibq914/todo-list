let input = prompt("What you would like to do?") // not const bc we reassign
const todos = [];
while(input !== "quit" && input !== "q") { // run if input is not quit AND q
    if (input === "list") {
        console.log("**********");
        for (i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("**********");
    }
    else if (input === "new") {
        const newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if (input === "delete") {
        const index = parseInt(prompt("Enter index to delete!"));
        if (!Number.isNaN(index)) { // if valid number
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted}`);    
        }
        else {
            console.log("Unknown index");
        }
    }
    input = prompt("What you would like to do?");
}
console.log("Quit App")
