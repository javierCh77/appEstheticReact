import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
// import views
import Home from './views/Home'

function App() {
  return (
    <>
    <Router>
           <Routes> 
               <Route path="*" element = { < Home /> } /> 
           </Routes>
      </Router>
   </>
  );
}

export default App;
