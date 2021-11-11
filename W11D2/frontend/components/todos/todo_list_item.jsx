import React from 'react';
import { receiveTodo } from '../../actions/todo_action';

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        // this.state = {

        //     done: false
        // }
        this.deleteTodo = this.deleteTodo.bind(this); 
        this.updateStatus = this.updateStatus.bind(this);
    }
   deleteTodo(e){
       e.preventDefault();
       this.props.removeTodo(this.props.todo)
   }

   updateStatus(e){
       e.preventDefault();
    //    this.props.todo.done ? false : true
    const nextState = Object.assign({}, this.props.todo, {done: !this.props.todo.done})
    this.props.receiveTodo(nextState)
   }

    render(){
            // console.log(this.props.todo.done);
        return(
            <div>
                <li>Title: {this.props.todo.title}</li>
                {/* <li>Body: {this.props.todo.body}</li> */}
                <button onClick={this.deleteTodo}>deleteTodo</button>
                <button className="update" onClick={this.updateStatus}>{this.props.todo.done ? "undone": "Done"}</button>
            </div>
        )
    }
    
}

export default TodoListItem;