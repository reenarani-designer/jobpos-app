import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./pages/Custom.css";
import Header from "./pages/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Addjob from "./pages/Addjob";
import Alljobs from "./pages/Alljobs";
import Otp from "./pages/Otp";
import CreateProfile from "./pages/Profile";
import JobDetails from "./pages/Jobdetails";
import RecommondedJobs from "./pages/Recommendedjobs";
import EmployerJoblist from "./pages/Employerjoblist";
import UpdateJob from "./pages/Updatejob";
import AdminLogin from "./pages/Adminlogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/otp" element={ <Otp />} />
          <Route path="/profile" element={ <CreateProfile /> } />
          <Route path="/jobdetails" element={ <JobDetails /> } />
          <Route path="/employerjoblist" element={ <EmployerJoblist/ > } />
          <Route path="/addjob" element={ <Addjob />} />
          <Route path="/alljobs" element={ <Alljobs />} />
          <Route path="/recommendedjobs" element={ <RecommondedJobs />} />
          <Route path="/updatejob" element={ <UpdateJob /> } />
          <Route path="/adminlogin" element={ <AdminLogin /> } />
      </Route>
      </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
