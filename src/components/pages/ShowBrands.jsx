
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowBrands = ({ brand }) => {

    const { name, photo } = brand;
    return (
        <Link to={`/brand/${name}`}>
            <div className='bg-slate-200 p-4 md:p-6 rounded-lg'>
                <img className='h-52 md:h-72 w-full' src={photo} alt="" />
                <h2 className='mt-4 text-2xl font-bold text-center'>{name}</h2>
            </div>
        </Link>
    );
};

ShowBrands.propTypes = {
    brand: PropTypes.object
};

export default ShowBrands;