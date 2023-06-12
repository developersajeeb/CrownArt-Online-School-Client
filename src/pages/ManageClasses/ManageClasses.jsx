import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../components/SectionHeader";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const { data: classData = [], refetch } = useQuery(['classData'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        const data = await res.json();
        return data;
    });

    const approveHandle = (id) => {
        fetch(`http://localhost:5000/class/approve/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: `You successfully approved this class`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'You can not make admin',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    const denyHandle = (id) => {
        fetch(`http://localhost:5000/class/deny/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: 'Deny!',
                        text: `You deny this class`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'You can not make instructor',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <main>
            <SectionHeader miniTitle={'all class'} bigTitle={'My Classes'}></SectionHeader>
            <section className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classData?.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.instructorName}</td>
                                <td>{singleClass.availableSeats}</td>
                                <td>{singleClass.price}</td>
                                <td className="capitalize">{singleClass.classStatus}</td>
                                <td className="flex gap-4">
                                    <button className="table-btn" onClick={() => window.my_modal_3.showModal()}>Add Feedback</button>
                                    {
                                        singleClass.classStatus === 'approve' ?
                                            <button disabled className='px-4 py-2 font-semibold bg-gray-200 rounded-full text-gray-400'>Approved</button>
                                            :
                                            <button className="table-btn" onClick={() => approveHandle(singleClass?._id)}>Approve</button>


                                    }
                                    {
                                        singleClass.classStatus === 'deny' ?
                                            <button disabled className='px-4 py-2 font-semibold bg-gray-200 rounded-full text-gray-400'>Denied</button>
                                            :
                                            <button className="table-btn" onClick={() => denyHandle(singleClass?._id)}>Deny</button>


                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </section>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-xl">Add Feedback</h3>
                    <textarea className="border-2 rounded-lg w-full border-gray-400 p-2" name="feedback" id="feedback" cols="30" rows="10"></textarea>
                </form>
            </dialog>
        </main>
    );
};

export default ManageClasses;