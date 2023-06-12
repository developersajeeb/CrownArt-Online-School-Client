import { useContext, useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";


const MySelectClasses = () => {
    const { user } = useContext(AuthContext);
    const [myEnrollClasses, setMyEnrollClasses] = useState([]);
    const {setPaymentPrice} = useContext(AuthContext)


    useEffect(() => {
        fetch(`https://assigment-12-server-nu.vercel.app/my-enroll-classes?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyEnrollClasses(data))
    }, [user])

    return (
        <main>
            <SectionHeader miniTitle={'my all selected class'} bigTitle={'My Classes'}></SectionHeader>
            <section className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEnrollClasses?.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.instructorName}</td>
                                <td>${singleClass.price}</td>
                                <td>{singleClass.payment}</td>
                                <td className="flex gap-2">
                                    <button className="table-btn">Delete</button>
                                    <Link to='/dashboard/payment'>
                                        <button onClick={() => setPaymentPrice(singleClass.price)} className="table-btn">Pay</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </section>

            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog>
        </main>
    );
};

export default MySelectClasses;