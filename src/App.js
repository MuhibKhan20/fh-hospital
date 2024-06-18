import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Ourdoctors from './pages/Ourdoctors';
import Departments from './pages/Departments';
import Services from './pages/Services.js';
import More from './pages/More';
import './js/script.js';
import Boardofdirectores from './pages/Boardofdirectores.js';
import History from './pages/History.js';
import Ourprojects from './pages/Ourprojects.js';
import Branches from './pages/Branches.js';
import Doctorshospital from './Branches/Doctorshospital.js';
import Akthersaeed from './Branches/Akthersaeed.js';
import Behriainclave from './Branches/Behriainclave.js';
import Behriagolfcity from './Branches/Behriagolfcity.js';
import Westwood from './Branches/Westwood.js';
import Dhabranch from './Branches/Dhabranch.js';
import AllamaIqbal from './Branches/AllamaIqbal.js';
import Dhaconsultant from './doctors.js/Dhaconsultant.js';
import Iqbaltownconsultant from './doctors.js/Iqbaltownconsultant.js';
import Westwoodconsultant from './doctors.js/Westwoodconsultant.js';
import Bahriagolfcosultant from './doctors.js/Bahriagolfcosultant.js';
import Bahriainclaveconsultant from './doctors.js/Bahriainclaveconsultant.js';
import Akhtersaeedconsultant from './doctors.js/Akhtersaeedconsultant.js';
import Doctorshospitalconsultant from './doctors.js/Doctorshospitalconsultant.js';
import Cardiology from './departments/Cardiology.js';
import Medicine from './departments/Medicine.js';
import Generalsurgery from './departments/Generalsurgery.js';
import Gynaecology from './departments/Gynaecology.js';
import Paeds from './departments/Paeds.js';
import Neurology from './departments/Neurology.js';
import Orthopedic from './departments/Orthopedic.js';
import Bloodbank from './services/Bloodbank.js';
import Emergency from './services/Emergency.js';
import Fhlaboratory from './services/Fhlaboratory.js';
import Icu from './services/Icu.js';
import Homemedical from './services/Homemedical.js';
import Operationtheatre from './services/Operationtheatre.js';
import Appointment from './Appointment/Appointment.js';

import CorporatePannelList from './pages/CorporatePannelList.js';
import Login from './pages/Login.js'


function App() {

  const location = useLocation();
  const hideNavbarAndFooter = ['/login'];
  const shouldHide = hideNavbarAndFooter.includes(location.pathname);


  return (
    <div style={{ position: 'relative' }}>


      {!shouldHide && (

        <div style={{ position: 'absolute', top: '0', left: '0', right: '0', zIndex: '5' }}>
          <Navbar />
        </div>

      )}

      <div style={{ position: 'absolute', top: '0', left: '0', right: '0' }}>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurDoctors" element={<Ourdoctors />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/more" element={<More />} />
          <Route path="/boardofdirectors" element={<Boardofdirectores />} />
          <Route path="/history" element={<History />} />
          <Route path="/ourprojects" element={<Ourprojects />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/allamaIqbal" element={<AllamaIqbal />} />
          <Route path="/dhabranch" element={<Dhabranch />} />
          <Route path="/westwood" element={<Westwood />} />
          <Route path="/behriagolfcity" element={<Behriagolfcity />} />
          <Route path="/behriainclave" element={<Behriainclave />} />
          <Route path="/akthersaeed" element={<Akthersaeed />} />
          <Route path="/doctorshospital" element={<Doctorshospital />} />
          <Route path="/dhaconsultant" element={<Dhaconsultant />} />
          <Route path="/iqbaltownconsultant" element={<Iqbaltownconsultant />} />
          <Route path="/westwoodconsultant" element={<Westwoodconsultant />} />
          <Route path="/bahriagolfcosultant" element={<Bahriagolfcosultant />} />
          <Route path="/bahriainclaveconsultant" element={<Bahriainclaveconsultant />} />
          <Route path="/akhtersaeedconsultant" element={<Akhtersaeedconsultant />} />
          <Route path="/doctorshospitalconsultant" element={<Doctorshospitalconsultant />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/generalsurgery" element={<Generalsurgery />} />
          <Route path="/gynaecology" element={<Gynaecology />} />
          <Route path="/paeds" element={<Paeds />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/orthopedic" element={<Orthopedic />} />
          <Route path="/bloodbank" element={<Bloodbank />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/fhlaboratory" element={<Fhlaboratory />} />
          <Route path="/icu" element={<Icu />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/homemedical" element={<Homemedical />} />
          <Route path="/operationtheatre" element={<Operationtheatre />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/corporatepannellist" element={<CorporatePannelList />} />
          <Route path="/login" element={<Login />} />

        </Routes>

        {!shouldHide && (
          <Footer />
        )}

  
      </div>

    </div>

  )
}

export default App