import Slider from "./Slider";
import { FaPalette, FaSchlix, FaDrawPolygon, FaUserAstronaut, FaSketch} from "react-icons/fa";

const Home = () => {
    return (
        <>
            <header>
                <Slider></Slider>
                <section className="bg-[#fff5ed] grid md:grid-cols-5 md:px-32 py-10 md:py-14 gap-12">
                    <div className="text-center md:border-r border-gray-300">
                        <FaPalette className="primary-color mx-auto" size={50}/>
                        <h3 className="text-3xl font-bold mt-3">Painting</h3>
                    </div>
                    <div className="text-center md:border-r border-gray-300">
                        <FaSchlix className="primary-color mx-auto" size={50}/>
                        <h3 className="text-3xl font-bold mt-3">Sketch</h3>
                    </div>
                    <div className="text-center md:border-r border-gray-300">
                        <FaDrawPolygon className="primary-color mx-auto" size={50}/>
                        <h3 className="text-3xl font-bold mt-3">Drawing</h3>
                    </div>
                    <div className="text-center md:border-r border-gray-300">
                        <FaUserAstronaut className="primary-color mx-auto" size={50}/>
                        <h3 className="text-3xl font-bold mt-3">Sculpture</h3>
                    </div>
                    <div className="text-center border-gray-300">
                        <FaSketch className="primary-color mx-auto" size={50}/>
                        <h3 className="text-3xl font-bold mt-3">Digital</h3>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Home;