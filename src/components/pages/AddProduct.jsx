import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        // console.log(name, photoUrl, brand, type, price, description, rating);
        const newProduct = { name, photoUrl, brand, type, price, description, rating };

        fetch('https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                    form.reset();
                }
            })



    }

    return (
        <div className='p-6 md:p-6'>
            <div className="max-w-7xl mx-auto my-7 bg-slate-200 p-6 rounded-lg">

                <h2 className="text-4xl font-bold text-center text-[#5EA3CA]">Add Product</h2>

                <form className="space-y-2 w-4/5 md:w-2/5 mx-auto mt-7" onSubmit={handleSubmit}>
                    <input required className="border-2 border-black" type="text" name="name" id="name" placeholder="Name" />
                    <br />
                    <input required className="border-2 border-black" type="text" name="photo" id="photo" placeholder="Photo URL" />
                    <br />

                    <h2 className="inline text-lg">Brand: </h2>
                    <select
                        className="border-2 border-black"
                        name="brand"
                        defaultValue="Samsung"
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
                        defaultValue="Phone"
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
                    <input required className="border-2 border-black" type="text" name="price" id="price" placeholder="Price" />
                    <br />
                    <textarea required className="border-2 border-black w-full" name="description" id="description" cols="50" rows="3" placeholder="Description"></textarea>
                    <br />

                    <h2 className="inline text-lg">Rating: </h2>
                    <select
                        className="border-2 border-black"
                        name="rating"
                        defaultValue="5"
                    >
                        <option value="5">5 *****</option>
                        <option value="4">4 ****</option>
                        <option value="3">3 ***</option>
                        <option value="2">2 **</option>
                        <option value="1">1 *</option>
                    </select>

                    <br />
                    <br />
                    <input className="text-lg font-bold rounded-md cursor-pointer bg-[#5EA3CA] px-4 py-2" type="submit" value="Add Product" />



                </form>


            </div>
        </div>
    );
};

export default AddProduct;