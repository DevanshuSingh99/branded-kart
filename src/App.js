import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Shoppingkart from "./components/Shoppingkart";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />}>  
                    </Route>
                    <Route path="/shoppingkart" element={<Shoppingkart />}>
                       
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
