import React from 'react'
import shortid from 'shortid'
import './component.scss'

export default class TaskInput extends React.Component {

    state = {
        text: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
            createdAt: new Date().toDateString()
        })
    }

    render () {
        return (
            <div>
                <form 
                    className="form d-flex align-items-center justify-content-center"
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        name="text"
                        className="input mx-3" 
                        type="text"
                        placeholder="Enter Task"
                        value={this.state.text}
                        onChange={this.handleChange}
                        required
                    />
                    <button className="btn btn-primary btn-sm" type='submit'>Create Task</button>
                </form>
            </div>
        )
    }
}
