import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ToDoList } from './components/ToDoList';
import { AddTask } from './components/AddTask';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/todolist/:filter?' render={(props) => <ToDoList {...props} />} tasks={ToDoList.ToDoLists} />
                <Route path='/add-task' component={AddTask} />
            </Layout>
        );
    }
}
