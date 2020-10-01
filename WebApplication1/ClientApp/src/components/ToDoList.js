import React, { Component } from 'react';
import { FaCheckSquare, FaPlusSquare, FaTrash, FaListAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../css/todo.css';
import axios from 'axios'

export class ToolMenu extends Component {
    static displayName = ToolMenu.name;

    render() {
        return (
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <NavLink to="/todolist" className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
                    <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
                </div>
                <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
            </footer>
        )
    }
}

export class ToDoList extends Component {
    static displayName = ToDoList.name;

    constructor(props) {
        super(props);
        this.state = { ToDoLists: [], loading: true };
    }

    componentDidMount() {
        this.FetchData();
        console.log(this.state);
    }

    renderToDoListTable(ToDoList) {
        return (
            <ul className="list-group m3">
                {ToDoList.map(todo =>   
                        <li key={todo.id} className="list-group-item d-flex align-items-center"> {todo.name}
                            {todo.completed
                            ? <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                            : <button className="btn btn-sm ml-auto btn-outline-danger">X</button>} </li>
                )}</ul>
        );
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