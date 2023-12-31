import SectionHeader from "../../components/SectionHeader";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    const { data: userData = [], refetch } = useQuery(['userData'], async () => {
        const res = await fetch('https://assigment-12-server-nu.vercel.app/users');
        const data = await res.json();
        return data;
      });

    const adminHandle = (id, name) => {
        fetch(`https://assigment-12-server-nu.vercel.app/user/admin/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: `You successfully made ${name} an admin`,
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

    const instructorHandle = (id, name) => {
        fetch(`https://assigment-12-server-nu.vercel.app/user/instructor/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: 'Success!',
                        text: `You successfully made ${name} an instructor`,
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
            <SectionHeader miniTitle={'all users'} bigTitle={'Manage Users'}></SectionHeader>
            <section>
                <div className="overflow-x-auto mt-10">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData?.map((singleUser, index) => <tr key={singleUser?._id}>
                                    <th>{index+1}</th>
                                    <td>{singleUser?.name}</td>
                                    <td>{singleUser?.email}</td>
                                    <td>{singleUser?.role}</td>
                                    <td className="flex gap-3">
                                        {
                                            singleUser.role === 'admin' ?
                                                <button onClick={() => adminHandle(singleUser?._id, singleUser?.name)} disabled className='px-4 py-2 font-semibold bg-gray-200 rounded-full text-gray-400'>Already Admin</button>
                                                :
                                                <button onClick={() => adminHandle(singleUser?._id, singleUser?.name)} className='table-btn'>Make Admin</button>
                                        }
                                        {
                                            singleUser.role === 'instructor' ?
                                                <button onClick={() => instructorHandle(singleUser?._id, singleUser?.name)} disabled className='px-4 py-2 font-semibold bg-gray-200 rounded-full text-gray-400'>Already Instructor</button>
                                                :
                                                <button onClick={() => instructorHandle(singleUser?._id, singleUser?.name)} className='table-btn'>Make Instructor</button>
                                        }
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