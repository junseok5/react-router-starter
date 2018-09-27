import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    )
}

export default Root