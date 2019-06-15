//need local state bc we need what the user types into the user fields
import React, { Component } from 'react';


class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this is e', this.state)
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })

  }
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Add new Todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.content} />
          </form>
        </div>
    )
  }
}

export default AddTodo