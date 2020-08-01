import React from 'react'
import MyHeader from './Components/MyHeader';
import MyMain from './Components/MyMain';
import MyFooter from './Components/MyFooter';
import './Assets/style.css'

function App(){
    return(
        <div>
            <MyHeader />
            <MyMain />
            <MyFooter />
        </div>
    )
}

export default App;