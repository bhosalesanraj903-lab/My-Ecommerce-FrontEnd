import React from 'react'

import { Route, Routes } from 'react-router-dom'
import CustomerRouter from './Router/CustomerRouter'
import { Toaster } from 'react-hot-toast'
import AdminRouter from './Router/AdminRouter'

const App = () => {
    return (
        <div>

            <Toaster/>
            <Routes>
                <Route path='/*' element={<CustomerRouter/>}/>
                <Route path='/admin/*' element={<AdminRouter/>} />
            </Routes>
           
        </div>
    )
}

export default App
