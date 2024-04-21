
import {  Navbar, Hero } from "./components";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Adminpages/Layout";
import Avtar from "./components/Adminpages/Avtar";
import Home from "./components/Adminpages/Home";
import Message from "./components/Adminpages/Message";
import Drag from "./components/Adminpages/Drag";
import Setting from "./components/Adminpages/Setting";
import Saved from "./components/Adminpages/Saved";
import { SpotlightPreview } from "./components/showcase/ShowCase";
import Models from "./components/Adminpages/Logout";
import Grid from "./components/showcase/Grid";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Adduser from "./components/Adminpages/Adduser";
import UserNav from "./components/userpage/UserNav";
import UserMain from "./components/userpage/UserMain";
import UserSidebar from "./components/userpage/UserSidebar";
import UserLayout from "./components/userpage/UserLayout";
const App = () => {
  const savedData = localStorage.getItem('user');
  
return(
  <>
  <BrowserRouter>
  
  <div className="bg-primary w-full overflow-hidden">
   <ToastContainer/>

    <Routes>
      <Route element={<Login/>} path={'/login'}/>
      
      <Route element={<Hero/>} path={'/'}/>
      <Route element={<UserMain/>} path={'/userhome'}/>




  {/* adminpage */}

      <Route element={<Layout/>} path={'/dashboard'}/>
      <Route element={<Avtar/>} path={'/profile'}/>
      <Route element={<Home/>} path={'/home'}/>
      <Route element={<Message/>} path={'/message'}/>
      <Route element={<Drag/>} path={'/drag'}/>
      <Route element={<Setting/>} path={'/setting'}/>
      <Route element={<Saved/>} path={'/save'}/>
      <Route element={<SpotlightPreview/>} path={'/show'}/>
      <Route element={<Models/>} path={'/model'}/>
      <Route element={<Grid/>} path={'/grid'}/>
      <Route element={<Adduser/>} path={'/adduser'}/>
      <Route element={<UserNav/>} path={'/usernav'}/>
      <Route element={<UserLayout/>} path={'/userbar'}/>
      
    </Routes>

  
    

  </div>
  </BrowserRouter>
  </>
)
};

export default App;
