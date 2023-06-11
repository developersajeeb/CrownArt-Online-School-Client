import { useContext, useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { AuthContext } from "../../providers/AuthProviders";
import TableData from "./TableData";


const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-classes?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyClasses(data))
    } ,[])

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
        </main>
    );
};

export default MyClasses;