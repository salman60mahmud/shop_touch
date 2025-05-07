import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import './Hero.css';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            image: '/src/media/hero-1.png',
        },
        {
            image: '/src/media/hero-2.png',
        },
        {
            image: '/src/media/hero-3.png',
        },
    ];

    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden hero">
            {/* Carousel Inner */}
            <div className="w-full h-full max-w-7xl mx-auto">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 flex flex-col md:flex-row items-center ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 p-8 md:pl-12 lg:pl-20 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center md:text-left lg:ml-16 my-auto md:my-0">
                            <h2 className="text-xl sm:text-4xl md:text-4xl xl:text-5xl font-semibold text-neutral-900">NEW ARRIVALS ONLY</h2>
                            <div>
                                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4">
                                    <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold">New</p>
                                    <img className="h-16 sm:h-20 md:h-24 w-auto" src="/src/media/hand_icon.png" alt="hand-icon" />
                                </div>
                                <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-2 sm:mt-4">Collections</p>
                                <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-2 sm:mt-4 md:mt-6">For Everyone</p>
                            </div>
                            <button className="btn btn-secondary hover:bg-secondary-content hover:text-secondary h-12 sm:h-14 md:h-16 xl:w-[400px] md:w-[360px] sm:w-auto  mx-auto md:mx-0 px-6 rounded-full flex items-center justify-center gap-2 sm:gap-4">
                                <span className="text-xl sm:text-2xl md:text-3xl font-medium">Latest Collection</span>
                                <FaArrowRight className="text-xl sm:text-2xl" />
                            </button>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 md:flex justify-center hidden">
                            <img
                                src={slide.image}
                                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 md:flex justify-center space-x-2 z-10 hidden">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => showSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary ${index === currentIndex ? 'bg-white' : 'opacity-100'} hover:bg-white transition-opacity duration-300`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Controls */}
            <button
                className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 bg-secondary hover:bg-secondary-content hover:text-secondary p-1 sm:p-2 md:p-3 rounded-full text-white transition-colors duration-300 z-10 hidden md:block"
                type="button"
                onClick={prevSlide}
            >
                <FaArrowLeft className="text-lg sm:text-xl md:text-2xl" />
                <span className="sr-only">Previous</span>
            </button>
            <button
                className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 bg-secondary hover:bg-secondary-content hover:text-secondary p-1 sm:p-2 md:p-3 rounded-full text-white transition-colors duration-300 z-10 hidden md:block"
                type="button"
                onClick={nextSlide}
            >
                <FaArrowRight className="text-lg sm:text-xl md:text-2xl" />
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};

export default Hero;