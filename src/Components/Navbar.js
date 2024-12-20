import React from "react";
import { Link } from "react-router-dom";

const userRole = "physician";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Navbar brand */}
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {userRole === "patient" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/patientdetails">
                    Patient Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patientappointment">
                    View Appointments 
                  </Link>
                </li>
              </>
            )}

            {userRole === "receptionist" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/managepatients">
                    Manage Patients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addpatient">
                    Add Patients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addappointment">
                    Add Appointment
                  </Link>
                </li>
              </>
            )}

            {userRole === "physician" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/allappointment">
                    View Patient Details
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div>
            <div>
              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
