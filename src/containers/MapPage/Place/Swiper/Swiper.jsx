import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import "../../../mainStyle.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

const SwiperTeg = function (imgsLinqs) {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="slider">
            <p className="slider__h">Фото помещения</p>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
                /*onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}*/
            >
                {
                    imgsLinqs.imgsLinqs.map((elem) => {
                        return (
                            <SwiperSlide>
                                <a data-fancybox="gallery">
                                    <img loading="lazy" src={elem}/>
                                </a>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};

export default SwiperTeg;