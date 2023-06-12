import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SectionHeader from "../../components/SectionHeader";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const className = form.className.value;
        const classImg = form.classImg.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const description = form.description.value;
        const classStatus = 'pending'
        const newClassInfo = { className, classImg, instructorName, instructorEmail, availableSeats, price, description, classStatus };

        fetch('https://assigment-12-server-nu.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClassInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You Successfully Added The User',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'You have not been able to add the user',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <main>
            <SectionHeader miniTitle={'your new class'} bigTitle={'Add Class'}></SectionHeader>
            <section className="mt-10">
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className='block text-gray-600' htmlFor="className">Class Name</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="className" id="" required placeholder="Class name" />
                        </div>

                        <div>
                            <label className='block text-gray-600' htmlFor="classImg">Class Image URL</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="classImg" id="" required placeholder="Class image url" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div>
                            <label className='block text-gray-600' htmlFor="instructorName">Instructor Name</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="instructorName" id="" disabled defaultValue={user.displayName} />
                        </div>

                        <div>
                            <label className='block text-gray-600' htmlFor="instructorEmail">Instructor Email</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="email" name="instructorEmail" id="" disabled defaultValue={user.email} />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div>
                            <label className='block text-gray-600' htmlFor="availableSeats">Available Seats</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="availableSeats" id="" placeholder="Available seats" />
                        </div>

                        <div>
                            <label className='block text-gray-600' htmlFor="price">Price</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="price" id="" placeholder="Price" />
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="availableSeats">Description</label>
                        <textarea className="border-2 border-gray-300 rounded-lg w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="description" id="description" cols="30" rows="10" placeholder="Class description"></textarea>
                    </div>

                    <button type="submit" className="primary-btn mt-6">Add Class</button>
                </form>
            </section>
        </main>
    );
};

export default AddClass;