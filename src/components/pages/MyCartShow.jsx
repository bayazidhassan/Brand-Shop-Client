import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';
import Rating from 'react-rating';



const MyCartShow = ({ cart, newCarts, setNewCarts }) => {

    const { _id, name, photoUrl, brand, type, price, rating, description } = cart;


    const handleDelete = () => {

        Swal.fire({
            title: 'Are you want to delete??',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )

                fetch(`https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart deleted Successfully.',
                                'success'
                            )

                            const remaining = newCarts.filter(c => c._id !== _id)
                            setNewCarts(remaining);
                        }
                    })
            }
        })


    }


    return (

        <div className='relative bg-slate-200 p-6 md:p-10 rounded-lg'>

            <div className='mb-16'>
                <img className='md:w-3/5 mx-auto md:h-80 rounded-lg' src={photoUrl} alt="" />
                <h2 className='text-lg mt-6'> <span className='font-medium'>Name:</span> {name}</h2>
                <h2 className='text-lg'><span className='font-medium'>Brand:</span> {brand}</h2>
                <h2 className='text-lg'><span className='font-medium'>Type:</span> {type}</h2>
                <h2 className='text-lg'><span className='font-medium'>Price:</span> {price} Tk.</h2>

                <h2 className='text-lg'><span className='font-medium'>Rating:</span> {rating} <Rating className='text-yellow-500 text-xl' readonly={true} initialRating={rating} emptySymbol={<AiOutlineStar></AiOutlineStar>} fullSymbol={<AiFillStar></AiFillStar>}></Rating>  </h2>


                <p className='text-justify'><span className='text-lg font-medium'>Description:</span> {description}</p>
            </div>
            <div className='absolute bottom-4 left-28 md:left-56'>
                <button onClick={handleDelete} className='mt-4 mr-6 bg-[#5EA3CA] px-4 py-2 text-lg font-bold rounded-lg'>Delete</button>

            </div>
        </div>
    );
};

MyCartShow.propTypes = {
    cart: PropTypes.object,
    newCarts: PropTypes.array,
    setNewCarts: PropTypes.func
};

export default MyCartShow;