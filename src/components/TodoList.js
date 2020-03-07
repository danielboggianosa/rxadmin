import React, { Component } from 'react'
import Todo from './Todo'
import todos from '../todos.json'

export default class TodoList extends Component {

    render() {
        return (
            <div>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>DONE</th>
                            <th>TASK</th>
                            <th>USER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => <Todo key={todo.id} todo={todo}></Todo>
                        )}
                    </tbody>
                </table>
                <div className="row">
                    <input className="form-control col-6" type="text" />
                    <button className="btn btn-success col-3">Add ToDo</button>
                    <button className="btn btn-warning col-3">Clear Complete</button>
                </div>
                <h5 className="text text-primary">{todos.length} left to do</h5>
            </div>
        )
    }
}
