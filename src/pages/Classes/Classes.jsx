import { useLoaderData } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import HeaderSection from '../../shared/HeaderSection';

const Classes = () => {
    const classes = useLoaderData();

    return (
        <>
            <HeaderSection name={'Classes'}></HeaderSection>
            <main className='p-4 md:p-32'>
                <div className='my-14 md:my-0'>
                    <SectionHeader miniTitle={'education'} bigTitle={'Full Time Courses'}></SectionHeader>
                </div>
                <section className='mt-0 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        classes.map(singleClass => <div key={singleClass._id} className='text-center'>
                            <figure className='relative'>
                                <img className='w-full h-60 object-cover rounded-lg' src={singleClass.classImg} alt="" />
                                <li className='flex gap-1 justify-center absolute bottom-2 left-2 text-white bg-black rounded-full px-3 py-1 text-sm'><p className='mini-header-color'>Instructor:</p> <p>{singleClass.instructorName}</p></li>
                            </figure>
                            <h2 className='text-3xl font-bold mt-6'>{singleClass.className}</h2>
                            <ul>
                                <li><h3 className='text-gray-400 text-2xl mt-2'><span className='primary-color text-3xl font-bold'>${singleClass.price}</span> /monthly</h3></li>
                                <li className='flex gap-1 justify-center font-semibold'><p className='primary-color'>Available seats:</p> <p>{singleClass.availableSeats}</p></li>
                                <li><button className='primary-btn mt-4'>Enroll</button></li>
                            </ul>
                        </div>)
                    }
                </section>
            </main>
        </>
    );
};

export default Classes;