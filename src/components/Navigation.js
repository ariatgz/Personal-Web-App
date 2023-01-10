import './Navigation.css'
import {NavLink} from "react-router-dom";
function Navigation() {


    return(
        <nav className="navbar bg-transparent  navbar-expand-xl  navbar-dark mt-1" id='navbar-anime'>
            <div className="px-xl-5 px-3">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mt-3 mt-xl-0" id="navbarText">
                    <a className="navbar-brand " target="_blank" href="https://github.com/ariatgz">Arya Taghizadeh
                         </a>


                    <div className="navbar-nav ms-auto">
                        <NavLink to='/' className="nav-item nav-link active" aria-current="page" >
                            <svg style={{baselineShift: "baseline"}} xmlns="http://www.w3.org/2000/svg" width="28" height="30" fill="currentColor"
                                 className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                            </svg>
                        </NavLink>
                        <NavLink to="/projects" className="nav-item nav-link text-light" ><h3>Projects</h3></NavLink>
                        <NavLink to='/skills' className="nav-item nav-link text-light" ><h3>My Skills</h3></NavLink>
                        <a className="nav-item nav-link text-light" ><h3>Resume</h3></a>
                        <NavLink to='/about' className="nav-item nav-link text-light" ><h3>About</h3></NavLink>
                    </div>
                </div>
            </div>
        </nav>


    )

}

export default Navigation;