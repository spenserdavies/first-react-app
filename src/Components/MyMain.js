import React from 'react'

function MyMain(){
    return(
        <main className="my-main">
            <p>Good {getTime()}!</p>
            <input type="checkbox"/><span>Learn React</span><br/>
            <input type="checkbox" /><span>Get Good</span><br />
            <input type="checkbox" /><span>Get Money</span><br />
        </main>
    )
}

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;
    if(hours < 12){
        timeOfDay = "Morning"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "Evening"
    } else {
        timeOfDay = "Night"
    }
    return timeOfDay;
}

export default MyMain