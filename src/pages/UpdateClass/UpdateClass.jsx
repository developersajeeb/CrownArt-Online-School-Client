import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const { user } = useContext(AuthContext)
    const singleClass = useLoaderData();
    const {_id, className, classImg, availableSeats, price, description } = singleClass;

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const className = form.className.value;
        const classImg = form.classImg.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const description = form.description.value;
        const updateClassInfo = { className, classImg, instructorName, instructorEmail, availableSeats, price, description };

        fetch(`https://assigment-12-server-nu.vercel.app/class/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClassInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You successfully update the class info',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                } else {
                    Swal.fire({
                        title: 'Warning!',
                        text: 'Please change some info',
                        icon: 'warning',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <main>
            <SectionHeader miniTitle={'update your class'} bigTitle={'Update Class'}></SectionHeader>
            <section className="mt-10">
                <form onSubmit={handleUpdate}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className='block text-gray-600' htmlFor="className">Class Name</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="className" id="" required placeholder="Class name" defaultValue={className} />
                        </div>

                        <div>
                            <label className='block text-gray-600' htmlFor="classImg">Class Image URL</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="text" name="classImg" id="" required placeholder="Class image url" defaultValue={classImg} />
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
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="availableSeats" id="" placeholder="Available seats" defaultValue={availableSeats} />
                        </div>

                        <div>
                            <label className='block text-gray-600' htmlFor="price">Price</label>
                            <input className='border-2 border-gray-300 rounded-full w-full py-3 px-5 mt-2 focus:border-2 text-sm' type="number" name="price" id="" placeholder="Price" defaultValue={price} />
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-600' htmlFor="availableSeats">Description</label>
                        <textarea className="border-2 border-gray-300 rounded-lg w-full py-3 px-5 mt-2 focus:border-2 text-sm" name="description" id="description" cols="30" rows="10" placeholder="Class description" defaultValue={description}></textarea>
                    </div>

                    <button type="submit" className="primary-btn mt-6">Add Class</button>
                </form>
            </section>
        </main>
    );
};

export default UpdateClass;