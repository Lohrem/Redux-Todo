import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/index'

const initState = {
  todos: [
    {
      todoText: "eat water",
      completed: false
    }
  ]
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          return action.payload === i ? {...todo, completed: !todo.completed} : todo
        })
      }
    default:
      return state
  }
}

export default reducer