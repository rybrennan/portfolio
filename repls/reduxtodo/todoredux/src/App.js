import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './containers/AddTodo';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import store from './store';
import { Provider } from 'react-redux';

//This is our root component/Container componenet where we are storing our state
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play video games'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    //we want to filter the state array
    //we will store array in new todos
    const todos = this.state.todos.filter((todo) => {
      //inside this filter method we will pass back in a function that takes in the indi
      //individual todo inside that function as a parameter so it can fire something on
      //each todo
      //if equal it will remove it. if not it will keep it
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
     let id = undefined;
    if (!this.state.todos.length) {
      id = 0;
    } else {
      id = this.state.todos[this.state.todos.length - 1].id + 1;
    }

    const newTodo = Object.assign({ id: id }, todo);
    const newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos
    })

  }

  render() {
    return (
      <Provider store={ store }>
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <h1 className="center blue-text">Todos</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            <AddTodo addTodo={this.addTodo} />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

