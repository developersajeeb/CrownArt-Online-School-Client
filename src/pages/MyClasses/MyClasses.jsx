import { useContext, useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { AuthContext } from "../../providers/AuthProviders";
import TableData from "./TableData";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-classes?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [user])

    return (
        <main>
            <SectionHeader miniTitle={'all class'} bigTitle={'My Classes'}></SectionHeader>
            <section className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses?.map((singleClass, index) => <TableData
                                key={singleClass._id}
                                singleClass={singleClass}
                                index={index}></TableData>)
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

export default MyClasses;