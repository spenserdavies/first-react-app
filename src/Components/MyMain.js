import React from 'react'
import TodoItem from './TodoItem'

function MyMain(){
    let styles = {
        color: "#FF8C00",
        fontSize: 32,
        textAlign: 'center'
        }
    return(
        <main className="todo-list">
            <p style={styles}>Its {getTime()} time</p>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />

        </main>
    )
}

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;
    if(hours < 12){
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    return timeOfDay;
}

export default MyMain