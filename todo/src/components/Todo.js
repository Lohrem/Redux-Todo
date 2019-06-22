import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions/index'
import './Todo.css'

class Todo extends Component {
  state = {
    todoText: ''
  }
  inputChange = e => {
    e.preventDefault()
    this.setState({ todoText: e.target.value })
  }
  newTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.todoText)
    this.setState({ todoText: '' })
  }
  toggleComp = (e, i) => {
    e.preventDefault()
    this.props.toggleComplete(i)
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text" name="todotext"
            value={this.state.todoText}
            onChange={this.inputChange}></input>
          <button type="submit" onClick={this.newTodo}>New Todo</button>
        </form>
        {this.props.todos.map((todo, i) => {
          return <p className={!todo.completed ? "notComplete" : "complete"} onClick={e => this.toggleComp(e, i)} key={i}>{todo.todoText}</p>
        })}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo, toggleComplete })(Todo);
