import { useLoaderData, useNavigate } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import HeaderSection from '../../shared/HeaderSection';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Classes = () => {
    const classes = useLoaderData();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSelect = (item) => {
        const {className, instructorName, price} = item;
        const savedClasses = {className: className, instructorName: instructorName, price: price, email:user.email, payment: 'pending'}
        if (user) {
            fetch('https://assigment-12-server-nu.vercel.app/all-enroll', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Class Selected!',
                            text: 'You successfully select this class',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Warning!',
                text: 'Please login first for select this class',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
            navigate('/login')
        }
    }

    return (
        <>
            <HeaderSection name={'Classes'}></HeaderSection>
            <main className='p-4 md:p-32'>
                <div className='my-14 md:my-0'>
                    <SectionHeader miniTitle={'education'} bigTitle={'Full Time Courses'}></SectionHeader>
                </div>
                <section className='mt-0 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        classes.map(singleClass => <div key={singleClass._id} className='text-center bg-slate-50 p-4 rounded-lg'>
                            <figure className='relative'>
                                <img className='w-full h-60 object-cover rounded-lg' src={singleClass.classImg} alt="" />
                                <li className='flex gap-1 justify-center absolute bottom-2 left-2 text-white bg-black rounded-full px-3 py-1 text-sm'><p className='mini-header-color'>Instructor:</p> <p>{singleClass.instructorName}</p></li>
                            </figure>
                            <h2 className='text-3xl font-bold mt-6'>{singleClass.className}</h2>
                            <ul>
                                <li><h3 className='text-gray-400 text-2xl mt-2'><span className='primary-color text-3xl font-bold'>${singleClass.price}</span> /monthly</h3></li>
                                <li className='flex gap-1 justify-center font-semibold'><p className='primary-color'>Available seats:</p> <p>{singleClass.availableSeats}</p></li>
                                {
                                    isAdmin ?
                                        <li><button disabled className='primary-btn mt-4'>Select</button></li>
                                        : isInstructor ?
                                            <li><button disabled className='primary-btn mt-4'>Select</button></li>
                                            :
                                            <li><button onClick={() => handleSelect(singleClass)} className='primary-btn mt-4'>Select</button></li>
                                }
                            </ul>
                        </div>)
                    }
                </section>
            </main>
        </>
    );
};

export default Classes;