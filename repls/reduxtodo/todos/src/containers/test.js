import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  state = {
    text : ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let text = this.state.text;
    // this.addTodo(this.state)
    this.props.dispatch({type: 'ADD_TODO', text})
    //this sets it back to blank
    this.setState({
      text: ''
    })
  }
  addTodo = (text) => {
    //update redux here
    this.setState({
      text: ''
    })
  }
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Add new Todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </form>
        </div>
    )
  }
}

export default connect()(AddTodo)