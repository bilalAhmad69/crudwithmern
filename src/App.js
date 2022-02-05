import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import MernStack from "./components/MernStack";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import Notfound from "./components/Notfound";


const App = ()=>{
    return (
  
        <Router>
        <Navbar/>
            <Routes>
              <Route path ="/" element= {<MernStack/>} />
              <Route path ="/all" element= {<AllUser/>} />
              <Route path ="/add" element= {<AddUser/>} />
              <Route path = "*"  element={<Notfound/>}/>
             </Routes>
            
         </Router>
    )
}
export default App;