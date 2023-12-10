import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, name, photoUrl, brand, type, price, rating, description } = product;



    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const photoUrl = form.photo.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const newProduct = { name, photoUrl, brand, type, price, description, rating };

        Swal.fire({
            title: 'Are you want to update?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/product/update/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {

                        // console.log(data)
                        if (data.modifiedCount > 0) {

                            Swal.fire({
                                title: 'Success!',
                                text: 'Product updated successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })

                            // form.reset();
                        }
                    })
            }
        })

    }


    return (
        <div className="p-6 md:p-0">
            <div className="max-w-7xl mx-auto my-6 bg-slate-200 border-2 p-6 rounded-lg">
                <h2 className="text-4xl font-bold text-center text-[#5EA3CA]">Update Product</h2>
                <form className="space-y-2 w-4/5 md:w-2/5 mx-auto mt-7" onSubmit={handleUpdate}>
                    <input required className="border-2 border-black" type="text" name="name" id="name" placeholder="Name" defaultValue={name} />
                    <br />
                    <input required className="border-2 border-black" type="text" name="photo" id="photo" placeholder="Photo URL" defaultValue={photoUrl} />
                    <br />
                    <h2 className="inline text-lg">Brand: </h2>
                    <select
                        className="border-2 border-black"
                        name="brand"
                        defaultValue={brand}
                    >
                        <option value="Samsung">Samsung</option>
                        <option value="Apple">Apple</option>
                        <option value="Sony">Sony</option>
                        <option value="Google">Google</option>
                        <option value="Intel">Intel</option>
                        <option value="Microsoft">Microsoft</option>
                    </select>
                    <br />
                    <h2 className="inline text-lg">Type: </h2>
                    <select
                        className="border-2 border-black"
                        name="type"
                        defaultValue={type}
                    >
                        <option value="Phone">Phone</option>
                        <option value="Computer">Computer</option>
                        <option value="Headphone">Headphone</option>
                        <option value="Processor">Processor</option>
                        <option value="Software">Software</option>
                        <option value="TV">TV</option>
                        <option value="Others">Others</option>
                    </select>
                    <br />
                    <input required className="border-2 border-black" type="text" name="price" id="price" placeholder="Price" defaultValue={price} />
                    <br />
                    <textarea required className="border-2 border-black w-full" name="description" id="description" cols="50" rows="3" placeholder="Description" defaultValue={description}></textarea>
                    <br />
                    <h2 className="inline text-lg">Rating: </h2>
                    <select
                        className="border-2 border-black"
                        name="rating"
                        defaultValue={rating}
                    >
                        <option value="5">5 *****</option>
                        <option value="4">4 ****</option>
                        <option value="3">3 ***</option>
                        <option value="2">2 **</option>
                        <option value="1">1 *</option>
                    </select>
                    <br />
                    <br />
                    <input className="cursor-pointer bg-[#5EA3CA] text-lg font-bold px-4 py-2 rounded-md" type="submit" value="Update" />

                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;