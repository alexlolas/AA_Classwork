import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_action";


 const todosReducer = (state = {}, action) => {
  Object.freeze(state)

  const nextState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        nextState[todo.id] = todo
      });
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo
      return nextState
      case REMOVE_TODO:
        delete nextState[action.todo.id]
        return nextState
    default:
      return state;
  }
};
export default todosReducer