import StepContainer from "../steps/step_list_container"
import React from "react";

const TodoDetailView = (props) => {
    return(
        <div>
            <StepContainer body={props.todo.body} />
        </div>
    )
}

export default TodoDetailView;
