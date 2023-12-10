import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/Fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        //login user
        loginUser(email, password)
            .then(() => {

                toast.success('Login Successful!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                //navigate after login if there is a private route
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {

                form.reset(); //form reset

                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {

                toast.success('Login Successful!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                //navigate after login if there is a private route
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {

                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    return (

        <div className="p-6 md:p-0">
            <div className="max-w-7xl mx-auto flex flex-col items-center my-10 bg-slate-200 p-6 md:py-20 rounded-lg">
                <h2 className="text-2xl text-center font-bold">Please Login</h2>
                <form onSubmit={handleLogin} className="w-4/5 md:w-1/5 mx-auto mt-4">
                    <input required className="block mb-2 w-full border-2 border-black" type="email" name="email" id="email" placeholder="Email" />
                    <input required className="block mb-2 w-full border-2 border-black" type="password" name="password" id="password" placeholder="Password" />
                    <input required className="w-2/5 mx-auto block cursor-pointer text-[#5EA3CA] text-lg font-semibold border-2 border-black" type="submit" value="Login" />
                </form>
                <button className="btn mt-4" onClick={handleSignInWithGoogle}> <FcGoogle className="w-6 h-6"></FcGoogle> <span>Sign In With Google</span> </button>
                <p className="text-center text-lg mt-2">Do not have an account? Please <Link className="text-[#5EA3CA] hover:font-bold" to='/signUp'>SignUp</Link> </p>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Login;