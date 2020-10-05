import React, { Component } from 'react';
import ToolMenu from './ToolMenu';


export class ToDoList extends Component {
    static displayName = ToDoList.name;

    constructor(props) {
        super(props);
        this.state = { ToDoLists: [], loading: true }
    }

    componentDidMount() {
        this.FetchData();
        console.log(this.state);
    }

    renderToDoListTable(ToDoList) {
        let filteredTasks;

        switch (this.props.filter) {
            case 'completed':
                filteredTasks = this.ToDoLists.filter(task => task.completed)
                break;
            default:
                filteredTasks = ToDoList;
        }

        if (filteredTasks.length != 0) {
            return (
                <ul className="list-group m3">
                    {filteredTasks.map(todo =>
                        <li key={todo.id} className="list-group-item d-flex align-items-center"> {todo.name}
                            {todo.completed
                                ? <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                                : <button className="btn btn-sm ml-auto btn-outline-danger">X</button>} </li>
                    )}</ul>
            );
        }
        else {
            return (
                <p>Aucune tâche</p>)
        }
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderToDoListTable(this.state.ToDoLists);

        return (
            <div>
                <h1 id="tabelLabel" >ToDo List</h1>
                {contents}
                <ToolMenu />
            </div>
        );
    }

    FetchData() {
        fetch('api/ToDoModels')
            .then(response => response.json())
            .then(data => this.setState({ ToDoLists: data, loading: false }, console.log(data)))
    }
}