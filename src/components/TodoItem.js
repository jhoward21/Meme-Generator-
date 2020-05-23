import React from "react"

function TodoItem (props) {
    return (
        <div className="todo-item">
        <input type="checkbox" checked={props.item.completed} />
        <p style = {{color:"#32a852"}}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem