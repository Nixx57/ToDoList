import React, { Component } from 'react';
import { ToolMenu } from './ToDoList';
import axios from 'axios';

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
        }
    }

    async handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.taskName)
        };

        const response = await fetch('api/ToDoModels', requestOptions)
        const data = await response.json();
    }

    onTaskNameChange(event) {
        this.setState({ taskName: event.target.value })
    }

    render() {
        return (
            <section>
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required onChange={this.onTaskNameChange.bind(this)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
                <ToolMenu />
            </section>
        );
    }
}

export default AddTask