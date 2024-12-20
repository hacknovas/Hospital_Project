import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddPatients from "./Components/Receptionist/AddPatients";
import AppoinmentList from "./Components/Receptionist/AddPatients";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ManagePatients from "./Components/Receptionist/ManagePatients";
import AppointmentCreate from "./Components/Receptionist/AppointmentCreate";
import DetailsAppoinment from "./Components/Physicians/DetailsAppoinment";
import PatientDetails from "./Components/Patients/PatientDetails";
import Login from "./Components/Common/Login";
import Register from "./Components/Common/Register";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />

        {/* Receptionist Links */}
        <Route path="/addpatient" element={<AddPatients></AddPatients>} />
        <Route
          path="/managepatients"
          element={<ManagePatients></ManagePatients>}
        ></Route>
        <Route
          path="/addappointment"
          element={<AppointmentCreate></AppointmentCreate>}
        ></Route>
        {/* Admin Links */}

        {/* Physicians */}
        <Route
          path="/allappointment"
          element={<DetailsAppoinment></DetailsAppoinment>}
        ></Route>

        {/* Patients */}
        <Route
          path="/patientdetails"
          element={<PatientDetails></PatientDetails>}
        ></Route>
        <Route
          path="/patientappointment"
          element={<PatientDetails></PatientDetails>}
        ></Route>

        {/* Common */}
        <Route
          path="/allAppoinments"
          element={<AppoinmentList></AppoinmentList>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
