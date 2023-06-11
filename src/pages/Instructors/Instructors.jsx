import { useLoaderData } from "react-router-dom";
import HeaderSection from "../../shared/HeaderSection";

const Instructors = () => {
    const instructors = useLoaderData();

    return (
        <>
            <HeaderSection name={'Instructors'}></HeaderSection>
            <main className="my-16 mx-4 md:m-32 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    instructors.map(instructor => <div key={instructor._id} className='text-center'>
                        <figure>
                            <img className='w-full h-96 object-cover rounded-lg' src={instructor.photo} alt="" />
                        </figure>
                        <h2 className='text-3xl font-bold mt-4'>{instructor.name}</h2>
                        <p>{instructor.email}</p>
                    </div>)
                }
            </main>
        </>
    );
};

export default Instructors;