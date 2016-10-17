console.log("JS loaded");

var todoList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0){
      console.log('You have no todo\'s in your list!');
    }else{
      console.log('My Todos: ');
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log( '(x)', this.todos[i].todoText);
        }else{
          console.log( '( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleAll: function(){
    var completedTodos = 0;
    var totalTodos = this.todos.length;

    //get num of completed todos
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }

    //Toggle Case 1: if everything is true make everything false
    if(completedTodos === totalTodos){
      //make everything false
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = false;
      }
    //Toggle Case 2: make everything true
    }else{
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
}
