import {connect} from 'react-redux';
import {receiveTodo, removeTodo} from "../../actions/todo_action";
import Todolist from "./todo_list";
import allTodos from "../../reducers/selectors";

const mSTP = state => {
    return{
        todos: allTodos(state)
    }
}

const mDTP = dispatch => {
   return {
        receiveTodo: todo => dispatch(receiveTodo(todo)),
        removeTodo: todo => dispatch(removeTodo(todo))
    }
}


export default connect(mSTP, mDTP)(Todolist);