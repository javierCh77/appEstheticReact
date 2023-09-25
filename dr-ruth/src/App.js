import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import './App.css';
// import views
import Home from './views/Home'
import Shifts from './views/Shifts'
import Products from './views/Products.jsx'
import Services from './views/Services'
import Contact from './views/Contact'



function App() {
  return (
    <>
    <Router>
           <Routes> 
               <Route path="*" element = { < Home /> } /> 
               <Route path="/turnos" element = { < Shifts /> } /> 
               <Route path="/productos" element = { < Products /> } /> 
               <Route path="/servicios" element = { < Services /> } /> 
               <Route path="/contacto" element = { < Contact /> } /> 
           </Routes>
       </Router>
   </>
  );
}

export default App;
