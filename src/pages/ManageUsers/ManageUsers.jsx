import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageUsers = () => {
    const userData = useLoaderData();
    const { user } = useContext(AuthContext);

    const { data } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await axios(`http://localhost:5000/user/admin?email=${user?.email}`);
            return response.data
            }
    });
    console.log(data);

    const adminHandle = (email) => {
        const saveAdmin = { email: email, role: 'admin' };
        fetch('http://localhost:5000/user/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveAdmin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: `You successfully made ${user.displayName} an admin`,
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



    return (
        <main>
            <SectionHeader miniTitle={'all users'} bigTitle={'Manage Users'}></SectionHeader>
            <section>
                <div className="overflow-x-auto mt-10">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData?.map((singleUser, index) => <tr key={singleUser?._id}>
                                    <th>{index++}</th>
                                    <td>{singleUser?.name}</td>
                                    <td>{singleUser?.email}</td>
                                    <td className="flex gap-3">
                                        <button onClick={() => adminHandle(singleUser?.email)} className="primary-btn">Make Admin</button>
                                        <button className="primary-btn">Make Instructor</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default ManageUsers;