import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';


import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Rating from 'react-rating';



const ShowProduct = ({ product }) => {

    const { _id, name, photoUrl, brand, type, price, rating, description } = product;


    const navigate = useNavigate();

    const handleDetails = () => {

        navigate(`/productDetails/${_id}`)
    }


    const handleUpdate = () => {
        navigate(`/updateProduct/${_id}`)
    }

    return (
        <div className='bg-slate-200 p-6 md:p-10 rounded-lg'>

            <img className='md:w-3/5 mx-auto md:h-80 rounded-lg' src={photoUrl} alt="" />
            <h2 className='text-lg mt-6'> <span className='font-medium'>Name:</span> {name}</h2>
            <h2 className='text-lg'><span className='font-medium'>Brand:</span> {brand}</h2>
            <h2 className='text-lg'><span className='font-medium'>Type:</span> {type}</h2>
            <h2 className='text-lg'><span className='font-medium'>Price:</span> {price} Tk.</h2>

            <h2 className='text-lg'><span className='font-medium'>Rating:</span> {rating} <Rating className='text-yellow-500 text-xl' readonly={true} initialRating={rating} emptySymbol={<AiOutlineStar></AiOutlineStar>} fullSymbol={<AiFillStar></AiFillStar>}></Rating>  </h2>
            
            <p className='text-justify'><span className='text-lg font-medium'>Description:</span> {description.slice(0, 150)}..........</p>

            <button onClick={handleDetails} className='mt-4 mr-6 bg-[#5EA3CA] px-4 py-2 text-lg font-bold rounded-lg'>Details</button>
            <button onClick={handleUpdate} className='bg-[#5EA3CA] px-4 py-2 text-lg font-bold rounded-lg'>Update</button>

        </div>
    );
};

ShowProduct.propTypes = {
    product: PropTypes.object
};

export default ShowProduct;