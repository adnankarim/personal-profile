import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Views/Home/Home'
import Contact from '../Views/Contact/Contact'
import Experience from '../Views/ProfessionalExperience/ProfessionalExperience'
import Education from '../Views/Education/Education'
export default function Routes() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}


export const Routing =()=>{
return(
  <div className='skills'>
          <h6>Menu</h6>
          <ul>
          <li>
              {" "}
              <Link style={{textDecoration: 'none',color:'black'}} to='/'>Introduction</Link>
            </li>
            <li>
              {" "}
              <Link style={{textDecoration: 'none',color:'black'}} to='/education'>Education</Link>
            </li>
            <li>
              {" "}
              <Link style={{textDecoration: 'none',color:'black'}} to='/experience'>Professional Experience</Link>
            </li>
            <li>
              {" "}
              <Link style={{textDecoration: 'none',color:'black'}} to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
);
}


