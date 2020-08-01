import React from 'react'
import MyHeader from './MyHeader';
import MyMain from './MyMain';
import MyFooter from './MyFooter';
import '../Assets/style.css'

function App(){
    return(
        <main>
            <MyHeader />
            <MyMain />
            <MyFooter />
        </main>
    )
}

export default App;