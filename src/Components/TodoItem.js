import React from 'react';

function TodoItem(props){
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <span>{props.todo.task}</span>
        </div>
    )
}

export default TodoItem;