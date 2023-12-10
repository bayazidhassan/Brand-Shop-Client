import { useLoaderData } from "react-router-dom";
import ShowBrands from "./ShowBrands";


const Brands = () => {


    const brands = useLoaderData();
    // console.log(brand);

    return (
        <div className="max-w-7xl mx-auto mt-20 px-6 md:px-0">

            <h2 className="text-center text-3xl md:text-4xl font-bold text-[#5EA3CA]">Our Top Brands</h2>

            <div className="grid md:grid-cols-2 gap-10 mt-8">
                {
                    brands.map(brand => <ShowBrands key={brand._id} brand={brand}></ShowBrands>)
                }
            </div>

        </div>
    );
};

export default Brands;