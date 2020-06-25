import React from 'react'
import { Layout } from '../layout/Layout'
import TaskInput from '../components/TaskInput'
import TodoCard from '../components/TodoCard'
import './Home.scss'
import NavigationBar from '../components/Navbar'

export default class Home extends React.Component {
    state = {
        todos: [],
        todoToShow: 'all'
    }

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    updateTodoShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeAllCompletedTodo = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render () {

        let todos = []

        if(this.state.todoToShow === 'all') {
            todos = this.state.todos;
        } else if (this.state.todoToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if (this.state.todoToShow === 'completed') {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return (
            <Layout>
                <NavigationBar />
                <div className="form-container">
                    <TaskInput onSubmit={this.addTodo}/>
                </div>
                <div className="todos-info my-3">
                    tasks left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div className="option-container">
                    <button className='btn btn-info mx-2 btn-sm' onClick={() => this.updateTodoShow('all')}>all</button>
                    <button className='btn btn-info mx-2 btn-sm' onClick={() => this.updateTodoShow('active')}>active</button>
                    <button className='btn btn-info mx-2 btn-sm' onClick={() => this.updateTodoShow('completed')}>complete</button>
                </div>
                {
                    this.state.todos.some(todo => todo.complete) ? (
                        <div>
                            <button className='btn btn-info' onClick={this.removeAllCompletedTodo}>remove all completed</button>
                        </div>
                    ) : null
                }
                <div className="todos-container">
                    {
                        todos.map(todo => (
                            <TodoCard 
                                toggleComplete={() => this.toggleComplete(todo.id)}
                                todo={todo}
                                key={todo.id} 
                                onDelete={() => this.handleDeleteTodo(todo.id)}
                            />
                        ))
                    }
                </div>
            </Layout>
        )
    }
}
