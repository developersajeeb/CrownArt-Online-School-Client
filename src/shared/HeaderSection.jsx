import banner from '../assets/slider/slider1.jpg'

// eslint-disable-next-line react/prop-types
const HeaderSection = ({name}) => {
    return (
        <header className='bg-cover bg-center py-16 md:p-32' style={{ backgroundImage: `url(${banner})` }}>
            <h1 className='text-white text-center text-5xl font-bold'>{name}</h1>
        </header>
    );
};

export default HeaderSection;