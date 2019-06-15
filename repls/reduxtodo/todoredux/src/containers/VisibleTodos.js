import connect from 'react-redux'
import Todos from 'todoredux/src/components/Todos.js'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: id => dispatch({type: 'DELETE_TODO', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);