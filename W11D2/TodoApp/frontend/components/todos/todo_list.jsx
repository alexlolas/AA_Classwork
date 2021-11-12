import React from 'react';
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form"

class TodoList extends React.Component{
  
componentDidMount() {
  this.props.fetchTodos()
}

 render() {
  return (
    <div>
      <h1>These are allToDo</h1>
      <ul>
        {this.props.todos.map((todo, i) => (
          <TodoListItem
            key={i}
            todo={todo}
            receiveTodo={this.props.receiveTodo}
            removeTodo={this.props.removeTodo}
            fetchTodos={this.props.fetchTodos}
          />
        ))}
      </ul>
      <TodoForm createTodo={this.props.createTodo} errors={this.props.errors}/>
    </div>
  );
};
}


export default TodoList; 