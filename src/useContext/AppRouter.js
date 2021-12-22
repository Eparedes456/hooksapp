import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Redirect,
  } from 'react-router-dom';

import { HomePage }  from './HomePage';
import { LoginPage }  from './LoginPage';
import { Navbar } from './Navbar';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                        
                    <Route exact path="/" element={ < HomePage/> } />
                    <Route exact path="/login" element={ < LoginPage/> } />
                    <Route element = { < HomePage /> } />
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>    

           

            </div>
    </Router>
        
    )
}
