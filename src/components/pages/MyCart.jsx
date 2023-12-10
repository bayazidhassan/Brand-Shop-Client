import { useLoaderData } from "react-router-dom";
import MyCartShow from "./MyCartShow";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const MyCart = () => {


    const { user } = useContext(AuthContext);
    const email = user.email;

    const carts = useLoaderData();
    const myCarts = carts.filter(c => c.email === email);

    const [newCarts, setNewCarts] = useState(myCarts);

    // console.log(myCarts);



    return (
        <div className="mt-6 mb-10">
            <h2 className="text-4xl font-bold text-center text-[#5EA3CA]">My Cart</h2>

            <div className="mt-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6 md:px-0">
                {
                    newCarts.map(cart => <MyCartShow key={cart._id} newCarts={newCarts} setNewCarts={setNewCarts} cart={cart}></MyCartShow>)
                }
            </div>


        </div>
    );
};

export default MyCart;