import React, { useState } from 'react'
import { FaStar, FaQuoteLeft, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./CredentialSection.css"
import { Link } from 'react-router-dom';

const testimonial = [
    {
        id: 1,
        name: 'Tom hardy',
        href: '#',
        imageSrc: 'images/avatar/01.jpg',
        imageAlt: "avatar",
        des: 'If you are looking for an excellent family lawyer fighting for your cause and on your side who truly cares, I would highly recommend Saul Goodman.After numerous discouraging initial consultations with various lawyers about my daughter’s father, who was blatantly neglecting to fulfill his paternal responsibilities, I was on the brink of giving up altogether until I met with James. I ended up retaining him with the dual objective of gaining sole custody of my daughter as well as receiving appropriate child support.',
    },
    {
        id: 2,
        name: 'Deepika Padukone',
        href: '#',
        imageSrc: 'images/avatar/02.jpg',
        imageAlt: "avatar",
        des: 'Saul Goodman is a pleasure to work with. He is skilful, calm, rational and personable, characteristics that are very welcome during the emotional tribulations of a divorce proceeding. James was always resolute in protecting my interests, but at the same time, realistic and careful not to escalate the conflict with the kind of hyperbole one sometimes witnesses in divorce cases. He is meticulous, and possesses a highly effective combination of extensive legal knowledge along with accurate instincts concerning human nature.',
    },
    {
        id: 3,
        name: 'Katrina Kaif',
        href: '#',
        imageSrc: 'images/avatar/03.jpg',
        imageAlt: "avatar",
        des: 'I would strongly recommend Mr. Saul Goodman, to anyone in need of a first-class family lawyer. My baby son was wrongfully removed by his mother from the United Kingdom to Canada. Against the odds, Mr. Marks was successful in quickly securing his safe return back to England, with a Hague Convention application. This was despite the difficulties and unpredictable twists and turns in my case..',
    }


]


export default function CredentialSection() {
    const [slider, setSlider] = useState();
    const settings = {
        className: "center",
        centerPadding: "10px",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        initialSlide: 0,
        nextArrow: <></>,
        prevArrow: <></>,
    };
    return (
        <>
            <section className="section testimonial-part">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="row">
                        <div className="w-full">
                            <div className="section-heading">
                            <h2 className="text-4xl font-extrabold tracking-tight text-emerald-400">Feedback</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="w-full">
                            <div className="testimonial-slider slider-arrow relative">
                                <i className="dandik slick-arrow" onClick={() => slider.slickNext()}> <FaAngleRight /> </i>
                                <Slider ref={c => setSlider(c)} {...settings}>
                                    {
                                        testimonial.map((item, index) => (
                                            <div className="flex items-center justify-center px-5 py-5 mt-16">
                                                <div className="w-full mx-auto rounded-lg bg-emerald-400 shadow-lg px-5 pt-5 pb-10 text-white">
                                                    <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                                                        <Link to="/" className="block relative">
                                                            <img alt={item.imageAlt} src={item.imageSrc} className="mx-auto object-cover rounded-full h-20 w-20 " />
                                                        </Link>
                                                    </div>
                                                    <div className="w-full mb-10">
                                                        <div className="text-3xl text-slate-600 text-left leading-tight h-3">
                                                            “
                                                        </div>
                                                        <p className="text-base text-white text-center px-5">
                                                            {item.des}
                                                        </p>
                                                        <div className="text-3xl text-slate-600 text-right leading-tight h-3 -mt-3">
                                                            ”
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <p className="text-md text-slate-600 font-bold text-center">
                                                            {item.name}
                                                        </p>
                                                     
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </Slider>
                                <i className="bamdik slick-arrow"  onClick={() => slider.slickPrev()}> <FaAngleLeft /> </i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
