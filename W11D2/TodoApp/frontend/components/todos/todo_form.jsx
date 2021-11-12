import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      id: Math.floor(Math.random() * 1000),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }
  updateBody(e) {
    this.setState({ body: e.target.value });
  }
  handleSubmit(e){
      e.preventDefault();
      let todo = this.state
      this.props.createTodo(todo);

       this.setState ({
         title: "",
         body: "",
         done: false,
         id: Math.floor(Math.random() * 1000),
       });
  }

  render(){
      return (
        <div>
          <h1>Create a Goal</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.updateTitle}
                
              />
            </label>
            <label>
              Body:
              <input
                type="text"
                value={this.state.body}
                onChange={this.updateBody}
                
              />
            </label>
            <button>Create todo!!</button>
          </form>
        </div>
      );
  }
}

export default TodoForm; 