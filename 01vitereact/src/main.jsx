import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https:google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const usename = "Abhishek Jaiswal"
const secondElement = ( 
<a href='https://google.com' target='_blank'>Visit Google </a>
)

const reactElement = React.createElement(
    'a',
    {
        href:'https://google.com' , target:'_blank'
    },
    "Click me to visit google!!!!",
    usename // evaluated exprssion comes after whole html 
)


function myApp() {
    return (
        <h1>MyApp is an Function</h1>
    )

}
createRoot(document.getElementById('root')).render(

    //    myApp() we can even write like this at the end App() is an fn
    // <App />
    // secondElement
    // secondElement    
    reactElement
)
