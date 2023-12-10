import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/Fa';

const Footer = () => {
    return (
        <div className='bg-[#2B3440] absolute z-10 w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-evenly items-center text-white py-4'>

            <div>
                <img className='w-12 md:w-16 h-12 md:h-16 mx-auto' src="https://i.ibb.co/PrFtSKB/website-logo-removebg-preview.png" alt="" />
                <p className="footer-title text-xs md:text-sm text-center">Brand Shop<br />Providing reliable services since 2020</p>
            </div>

            <div>
                <h2 className="footer-title text-xs md:text-sm text-center">Find us on</h2>
                <div className="flex justify-center gap-4 md:mt-4">
                    <a href="https://www.facebook.com/"><FaFacebook className='w-5 md:w-6 h-5 md:h-6'></FaFacebook></a>
                    <a href="https://www.youtube.com/"><FaYoutube className='w-5 md:w-6 h-5 md:h-6'></FaYoutube></a>
                    <a href="https://twitter.com/"><FaTwitter className='w-5 md:w-6 h-5 md:h-6'></FaTwitter></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;