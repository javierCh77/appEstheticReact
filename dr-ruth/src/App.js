import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
// import views
import Home from './views/Home'
import Shifts from './views/Shifts'
import Products from './views/Products.jsx'
import Services from './views/Services'
import Contact from './views/Contact'
import Section1 from "./components/sections/section1/Section1";
import SectionLogo from "./components/sections/section2/SectionLogo";
import SectionBelle from "./components/sections/section3/SectionBelle";





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
      <SectionLogo />
      <Section1 />
      <SectionBelle />
   </>
  );
}

export default App;
