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
            <TodoItem todo={{task: "Get Money"}}/>
            <TodoItem todo={{task: "Get More"}}/>
            <TodoItem todo={{task: "Jakes Mom"}}/>
            <TodoItem todo={{task: "Jakes Mom Again"}}/>

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