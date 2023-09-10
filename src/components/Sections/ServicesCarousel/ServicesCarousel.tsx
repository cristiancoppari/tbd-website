import { Swiper, SwiperSlide } from "swiper/react";

import ImageTextCta from "@/components/Cards/ImageTextCta/ImageTextCta";
import { carouselServices } from "@/data/data";

const carouselConfig = {
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
};

function ServicesCarousel() {
    return (
        <div className="wrapper">
            <Swiper className="servicesCarousel" {...carouselConfig}>
                {carouselServices.map((service) => (
                    <SwiperSlide key={service.title}>
                        <ImageTextCta
                            title={service.title}
                            text={service.text}
                            image={service.image}
                            imagePosition="top"
                            className="servicesCarousel__card"
                        >
                            <ImageTextCta.Cta>Quiero una cotización</ImageTextCta.Cta>
                        </ImageTextCta>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ServicesCarousel;
