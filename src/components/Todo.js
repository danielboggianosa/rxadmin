import React, { Component } from 'react'

export default class Todo extends Component {
    
    todo = this.props.todo;
    
    render() {
        return (
            <tr>
                <td className="p-0">
                    <input type="checkbox" id={this.todo.id} value={this.todo.done} className="form-control m-1" />
                </td>
                <td className="p-0">
                    <label htmlFor={this.todo.id} className="p-1 m-0 w-100 btn text-left">
                        <h6>
                            {this.todo.title}
                        </h6>
                    </label>
                </td>
                <td>
                    {this.todo.userId}
                </td>
            </tr>
        )
    }
}
