window.setTimeout(function() {
    var answer = prompt("What to you want to do?");
    var todos = [];

    while(answer !== "quit") {
        if(answer === "new") {
            addNewTodo();
        } else if(answer === "view") {
            viewTodoList();
        } else if(answer === "delete") {
            deleteTodo();
        } else {
            console.log("Wrong input!");
        }

        var answer = prompt("What to you want to do?");
    }

    function addNewTodo() {
        var name = prompt("Give the name of the todo!")
        todos.push(name);
        console.log(name + " added to the list.");
    }

    function viewTodoList() {
        var i = 0;
        todos.forEach(function(todo, i) {
            console.log("*****");
            console.log(i + ": " + todo);
            i++;
        })
    }

    function deleteTodo() {
        var index = prompt("Give the index of the todo that you want to delete!");
        var nameDeleted = todos.splice(index,1);
        console.log(nameDeleted + " deleted from the the list.");
    }

    console.log("You quit!");

}, 500);
  
