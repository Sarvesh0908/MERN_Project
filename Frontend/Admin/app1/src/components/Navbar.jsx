import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import './Navbar.css';   
import { useContext } from "react";
import { LoginContext } from "../App";




function Navbar() {

  const navigate = useNavigate();
const { setLoginStatus } = useContext(LoginContext);

const logoutUser = () => {
  sessionStorage.clear();        
  setLoginStatus(false);         
  navigate("/");                 
};
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ background: "linear-gradient(90deg,#0ea5e9,#38bdf8)" }}
    >
      <div className="container-fluid">

        <Link className="navbar-brand text-white fw-bold nav-brand">
          Admin Panel
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">

            <li className="nav-item">
              <Link to="/home" className="nav-link nav-item-style">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle nav-item-style"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Courses
              </a>

              <ul className="dropdown-menu nav-dropdown-menu">
                <li><Link className="dropdown-item dropdown-item-custom" to="/allcourse">All Courses</Link></li>
                <li><Link className="dropdown-item dropdown-item-custom" to="/addcourse">Add Course</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle nav-item-style"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Videos
              </a>

              <ul className="dropdown-menu nav-dropdown-menu">
                <li><Link className="dropdown-item dropdown-item-custom" to="/allvideos">All Videos</Link></li>
                <li><Link className="dropdown-item dropdown-item-custom" to="/addvideos">Add Video</Link></li>
              </ul>
            </li>

             <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle nav-item-style"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Students
              </a>

              <ul className="dropdown-menu nav-dropdown-menu">
                <li><Link className="dropdown-item dropdown-item-custom" to="/allstudents">Get All Students</Link></li>
              </ul>
            </li>

          </ul>

          {/* RIGHT Admin */}
          <div className="dropdown">
            <button className="btn btn-light admin-btn" data-bs-toggle="dropdown">
              Admin
            </button>

            <ul className="dropdown-menu dropdown-menu-end nav-dropdown-menu">
              <hr />
              <li><button className="dropdown-item text-danger dropdown-item-custom" onClick={logoutUser}>Logout</button></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar