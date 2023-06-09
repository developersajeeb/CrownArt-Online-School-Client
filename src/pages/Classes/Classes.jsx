import banner from '../../assets/slider/slider1.jpg'
import SectionHeader from '../../components/SectionHeader';

const Classes = () => {

    return (
        <>
            <header className='bg-cover bg-center py-16 md:p-32' style={{ backgroundImage: `url(${banner})` }}>
                <h1 className='text-white text-center text-5xl font-bold'>Classes</h1>
            </header>
            <main className='md:p-32'>
                <SectionHeader miniTitle={'education'} bigTitle={'Full Time Courses'}></SectionHeader>
                <section className='mt-10 grid md:grid-cols-2 lg:grid-cols-3'>
                    <div className='text-center'>
                        <figure>
                            <img className='w-full h-56 object-cover rounded-lg' src="https://crown-art.ancorathemes.com/wp-content/uploads/2017/03/image-22-770x334.jpg" alt="" />
                        </figure>
                        <h2 className='text-3xl font-bold mt-6'>Abstracting from the Image</h2>

                        <ul className='my-5'>
                            <li className='flex gap-1 justify-center'><p className='primary-color font-semibold'>Instructor:</p> <p>Sajeeb</p></li>
                            <li className='flex gap-1 justify-center'><p className='primary-color font-semibold'>Available seats:</p> <p>20</p></li>
                        </ul>

                        <div className='flex justify-between items-center'>
                            <button className='primary-btn'>Enroll</button>
                            <h3 className='text-gray-400 text-2xl'><span className='primary-color text-3xl font-bold'>$250</span> /monthly</h3>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Classes;