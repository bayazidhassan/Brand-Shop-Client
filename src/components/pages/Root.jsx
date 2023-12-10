import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>

            <Outlet></Outlet>

            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;