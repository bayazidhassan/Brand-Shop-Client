import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';



const SignUp = () => {


    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            toast.error('Password must be 6 characters long!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one capital letter!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Password must contain at least one special character!', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }


        //createUser
        createUser(email, password)
            .then(result => {

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        // console.log('profile updated successfully');
                    })
                    .catch(error => {
                        console.error(error);
                    })

                // console.log('successfully register')
                // console.log(result.user);

                toast.success('Registration Successful!', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                logOut();
                navigate('/login');
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


    return (

        <div className='p-6 md:p-0'>
            <div className="max-w-7xl mx-auto my-10 bg-slate-200 p-6 md:py-20 rounded-lg">
                <h2 className="text-2xl text-center font-bold">Please SignUp</h2>
                <form onSubmit={handleRegistration} className="w-4/5 md:w-1/5 mx-auto mt-4">
                    <input required className="block mb-2 w-full border-2 border-black" type="text" name="name" id="name" placeholder="Name" />
                    <input required className="block mb-2 w-full border-2 border-black" type="text" name="photoURL" id="photoURL" placeholder="Photo URL" />
                    <input required className="block mb-2 w-full border-2 border-black" type="email" name="email" id="email" placeholder="Email" />
                    <input required className="block mb-2 w-full border-2 border-black" type="password" name="password" id="password" placeholder="Password" />
                    <input required className="w-2/5 mx-auto block cursor-pointer text-[#5EA3CA] text-lg font-semibold border-2 border-black" type="submit" value="SignUp" />
                </form>
                <p className="text-center text-lg mt-2">Already have an account? Please <Link className="text-[#5EA3CA] hover:font-bold" to='/login'>Login</Link> </p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;