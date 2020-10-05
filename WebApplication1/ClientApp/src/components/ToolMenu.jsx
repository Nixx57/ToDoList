import React, { Component } from 'react';
import '../css/todo.css';
import { FaCheckSquare, FaPlusSquare, FaTrash, FaListAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


export class ToolMenu extends Component {
    static displayName = ToolMenu.name;

    render() {
        return (
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <NavLink to="/todolist" className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
                    <NavLink to="/todolist/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
                </div>
                <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
            </footer>
        )
    }
}

export default ToolMenu;