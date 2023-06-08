import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../../assets/slider/slider1.jpg'
import img2 from '../../assets/slider/slider2.jpg'
import img3 from '../../assets/slider/slider3.jpg'
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#febb64",
                    "--swiper-pagination-color": "#febb64",
                    zIndex: -10
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{ backgroundImage: `url(${img1})` }} className="py-20 px-6 md:p-48 bg-cover bg-center text-center">
                    <p className="text-white text-xl">Crown Art</p>
                    <h1 className="text-white font-bold text-5xl md:text-7xl">Pursue <h3 className="inline-block mini-header-color font-light italic">your</h3> passion. <br /> Create your <h3 className="inline-block mini-header-color font-light italic">life</h3></h1>
                    <Link to='/all-dolls'>
                        <button className="primary-btn mt-8">Read More</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img2})` }} className="py-20 px-6 md:p-48 bg-cover bg-center text-center">
                    <p className="text-white text-xl">Crown Art</p>
                    <h1 className="text-white font-bold text-5xl md:text-7xl">Pursue <h3 className="inline-block mini-header-color font-light italic">your</h3> passion. <br /> Create your <h3 className="inline-block mini-header-color font-light italic">life</h3></h1>
                    <Link to='/all-dolls'>
                        <button className="primary-btn mt-8">Read More</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img3})` }} className="py-20 px-6 md:p-48 bg-cover bg-center text-center">
                    <p className="text-white text-xl">Crown Art</p>
                    <h1 className="text-white font-bold text-5xl md:text-7xl">Pursue <h3 className="inline-block mini-header-color font-light italic">your</h3> passion. <br /> Create your <h3 className="inline-block mini-header-color font-light italic">life</h3></h1>
                    <Link to='/all-dolls'>
                        <button className="primary-btn mt-8">Read More</button>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;