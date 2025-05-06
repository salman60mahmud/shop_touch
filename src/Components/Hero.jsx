import { FaArrowRight } from "react-icons/fa6";
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero flex flex-col lg:flex-row min-h-screen w-full">
            <div className="flex flex-1 flex-col justify-center gap-8 lg:gap-20 px-4 sm:px-8 md:px-12 lg:pl-60 leading-none text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900">NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">New</p>
                        <img className="h-16 sm:h-20 md:h-24 w-auto" src="/src/media/hand_icon.png" alt="hand-icon" />
                    </div>
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-2 sm:mt-4">Collections</p>
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-3 sm:mt-6">For Everyone</p>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <button className="flex items-center justify-center gap-2 sm:gap-4 bg-secondary hover:bg-secondary-content hover:text-secondary h-12 sm:h-16 px-4 sm:px-6 rounded-full text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium transition-colors duration-300">
                        <span>Latest Collection</span>
                        <FaArrowRight className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                    </button>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
                <img 
                    src="/src/media/hero_image.png" 
                    alt="hero-image" 
                    className="w-full max-w-md md:max-w-lg lg:max-w-none h-auto"
                />
            </div>
        </div>
    );
};

export default Hero;