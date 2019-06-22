export const ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"

// caps are used to import into reducers
// lowers are used for components

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: { todoText: todo, completed: false }
  }
}

export const toggleComplete = index => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  }
}