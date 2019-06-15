import React from 'react';
//using destructiuring here to grab the todos of the object
const Todos = ({todos, deleteTodo}) => {
  //checking here to see if we have any todos
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todos Left</p>
  )
  return (
    <div className="todos collection">
      {/* this is line 5 */}
      {todoList}
    </div>
  )
}

export default Todos