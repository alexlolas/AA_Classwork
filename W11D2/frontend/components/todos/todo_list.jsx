import React from 'react';
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form"
const TodoList = (props) => {
  return (
    <div>
      <h1>These are allToDo</h1>
      <ul>
        {props.todos.map((todo, i) => (
          <TodoListItem
            key={i}
            todo={todo}
            receiveTodo={props.receiveTodo}
            removeTodo={props.removeTodo}
          />
        ))}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} />
    </div>
  );
};


export default TodoList; 