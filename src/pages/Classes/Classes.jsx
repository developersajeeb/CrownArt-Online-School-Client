import banner from '../../assets/slider/slider1.jpg'

const Classes = () => {
    return (
        <main>
            <header className='bg-cover bg-center py-16 md:p-32' style={{backgroundImage: `url(${banner})`}}>
                <h1 className='text-white text-center text-5xl font-bold'>Classes</h1>
            </header>
        </main>
    );
};

export default Classes;