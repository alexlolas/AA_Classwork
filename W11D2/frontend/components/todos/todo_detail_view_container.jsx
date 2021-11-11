import {connect} from "react-redux";
import TodoDetailView from "./todo_detail-view";
import { removeTodo } from "../../actions/todo_action";
const mDTP = (dispatch) => {
    return{
        removeTodo: (todo) => dispatch(removeTodo(todo))
    }
}

export default connect(null, mDTP)(TodoDetailView);