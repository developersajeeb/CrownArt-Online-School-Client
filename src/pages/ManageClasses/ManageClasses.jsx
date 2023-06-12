import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../components/SectionHeader";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
    const [feedbackFormVisible, setFeedbackFormVisible] = useState(false);

    const showFeedbackForm = () => {
        setFeedbackFormVisible(true);
    };

    const { data: classData = [], refetch } = useQuery(['classData'], async () => {
        const res = await fetch('https://assigment-12-server-nu.vercel.app/classes');
        const data = await res.json();
        return data;
    });

    const approveHandle = (id) => {
        fetch(`https://assigment-12-server-nu.vercel.app/class/approve/${id}`, {
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
        fetch(`https://assigment-12-server-nu.vercel.app/class/deny/${id}`, {
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

    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        fetch('https://assigment-12-server-nu.vercel.app/feedback', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedback })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Feedback Send!',
                        text: 'You successfully send a feedback',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'You have not been able to send the feedback',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            setFeedbackFormVisible(false);
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
                                    <div className="">
                                        <button className="table-btn relative" onClick={() => showFeedbackForm()}>Add Feedback</button>
                                        <form className={`modal-box absolute z-10 right-8 ${feedbackFormVisible ? 'visible' : 'hidden'}`} onSubmit={handleFeedback}>
                                            <h3 className="font-bold text-xl">Add Feedback</h3>
                                            <textarea className="border-2 rounded-lg w-full border-gray-400 p-2" name="feedback" id="feedback" cols="30" rows="10" required></textarea>
                                            <button className="primary-btn mt-3" type="submit">Submit</button>
                                        </form>
                                    </div>
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
        </main>
    );
};

export default ManageClasses;