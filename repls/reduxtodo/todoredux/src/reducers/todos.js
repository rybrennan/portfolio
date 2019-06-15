const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return [
      ...state,{
        id:action.id,
        content: action.content
      }
    ]

    case 'DELETE_TODO':
    return state.todos.filter((todo) => {
      //inside this filter method we will pass back in a function that takes in the indi
      //individual todo inside that function as a parameter so it can fire something on
      //each todo
      //if equal it will remove it. if not it will keep it
      return todo.id !== action.id
    });
    default:
    return state
  }
}








//our reducer takes in state and does something
//to that state based on the action that is passed to it