import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@heroicons/react/24/solid";

import Section from "@/components/Section/Section";
import { testimonials } from "@/data/data";

const carouselConfig = {
    spaceBetween: 20,
    slidesPerView: 1.2,
    breakpoints: {
        640: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 3.2,
        },
    },
};

function Testimonials() {
    return (
        <Section
            className="testimonials"
            title="¿Qué dicen nuestros clientes?"
            description={[
                "Estamos muy orgullosos de nuestro trabajo y lo que construimos en estos años. A continuación podés leer algunas opiniones de empresas que nos contrataron.",
            ]}
        >
            <Swiper className="testimonials__carousel" {...carouselConfig}>
                {testimonials.map((item) => (
                    <SwiperSlide key={item.position}>
                        <div className="testimonials__card">
                            <h6 className="testimonials__card__title p-big">{item.company}</h6>
                            <p className="testimonials__card__p p text-gray">{item.position}</p>
                            <p className="testimonials__card__message">{item.message}</p>

                            <div className="testimonials__card__rating">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Section>
    );
}

export default Testimonials;
