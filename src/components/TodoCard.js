import React from 'react'
import './component.scss'

export default class TodoCard extends React.Component {
    render () {
        return (
            <div className="card bg-dark shadow-lg" style={{width: "18rem"}}>
                <div className="card-header align-items-start">
                    <button type="button" className="close" aria-label="Close" onClick={this.props.onDelete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title"><strong>Task#{this.props.todo.id}</strong></h5>
                    <small>{`${this.props.todo.createdAt}`}</small>
                </div>
                <div  style={{textDecoration: this.props.todo.complete ? "line-through" : ""}} className="card-body" onClick={this.props.toggleComplete}>
                    <p className="card-text">{this.props.todo.text}</p>
                </div>
                <div className="card-footer text-muted d-flex flex-direction-row align-items-center justify-content-center"> 
                    <small><strong>Task status: </strong>{this.props.todo.complete ? 'completed' : 'incomplete'}</small>
                </div>
            </div>
        )
    }
}