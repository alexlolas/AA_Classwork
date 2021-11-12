import {connect} from 'react-redux';
import {receiveTodo, removeTodo, fetchTodos, receiveTodos, createTodo} from "../../actions/todo_action";
import Todolist from "./todo_list";
import allTodos from "../../reducers/selectors";

const mSTP = state => {
    return{
        todos: allTodos(state),
        errors: state.errors
    }
}

const mDTP = dispatch => {
   return {
        receiveTodo: todo => dispatch(receiveTodo(todo)),
        removeTodo: todo => dispatch(removeTodo(todo)),
        fetchTodos: todo => dispatch(fetchTodos(todo)),
        createTodo: todo => dispatch(createTodo(todo))
    }
}


export default connect(mSTP, mDTP)(Todolist);