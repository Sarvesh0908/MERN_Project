import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container-fluid">

                
                <NavLink className="navbar-brand fw-bold" to="/home">
                    🎓 CoursePortal
                </NavLink>

                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/mycourses">
                                My Courses
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">
                                Profile
                            </NavLink>
                        </li>
                    </ul>

                    
                    <div className="d-flex align-items-center gap-3">
                        <span className="text-light d-none d-lg-block">
                            Welcome 👋
                        </span>

                        <NavLink
                            to="/"
                            className="btn btn-outline-light btn-sm"
                        >
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        
    );
}




