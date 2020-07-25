window.setTimeout(function() {

var todo = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {

	if (input === "list") {
		console.log(todo);
	} else if(input === "new") {
		var newTodo = prompt("Enter new todo");
		todo.push(newTodo);
	}
	input = prompt("what would you like to do?");
}
console.log("You quit the app");








}, 500);