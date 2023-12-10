import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';

import Rating from 'react-rating';




const ProductDetails = () => {

    const product = useLoaderData();
    const { name, photoUrl, brand, type, price, rating, description } = product;

    const { user } = useContext(AuthContext);
    const email = user.email;


    const myCart = { email, name, photoUrl, brand, type, price, description, rating };



    const addToCart = () => {
        fetch('https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/addToMyCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCart)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to MyCart successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                }
            })
    }



    return (
        <div className="p-6 md:p-0">
            <div className='my-10 max-w-7xl mx-auto bg-slate-200 p-6 md:p-10 rounded-lg'>

                <h2 className="text-4xl font-bold text-center text-[#5EA3CA] mb-8">Product Details</h2>

                <img className='md:w-2/5 mx-auto md:h-[450px] rounded-lg' src={photoUrl} alt="" />
                <div className="md:w-3/5 mx-auto">
                    <h2 className='text-lg mt-6'> <span className='font-medium'>Name:</span> {name}</h2>
                    <h2 className='text-lg'><span className='font-medium'>Brand:</span> {brand}</h2>
                    <h2 className='text-lg'><span className='font-medium'>Type:</span> {type}</h2>
                    <h2 className='text-lg'><span className='font-medium'>Price:</span> {price} Tk.</h2>

                    <h2 className='text-lg'><span className='font-medium'>Rating:</span> {rating} <Rating className='text-yellow-500 text-xl' readonly={true} initialRating={rating} emptySymbol={<AiOutlineStar></AiOutlineStar>} fullSymbol={<AiFillStar></AiFillStar>}></Rating>  </h2>

                   
                    <p className='text-justify'><span className='text-lg font-medium'>Description:</span> {description}</p>

                    <button onClick={addToCart} className='mt-4 mr-6 bg-[#5EA3CA] px-4 py-2 text-lg font-bold rounded-lg'>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;