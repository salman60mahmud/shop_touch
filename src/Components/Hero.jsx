import "./Hero.css"
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="hero">
            <div className="flex flex-1 flex-col justify-center gap-20 pl-60 leading-none">
                <h2 className="text-5xl font-semibold text-neutral-900">NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="flex items-center gap-4">
                        <p className="text-7xl font-medium">New</p>
                        <img className="h-24 w-auto" src="/src/media/hand_icon.png" alt="hand-icon" />
                    </div>
                    <p className="text-7xl font-semibold mt-4">Collections</p>
                    <p className="text-7xl font-semibold mt-6">For Everyone</p>
                </div>
                <button className="flex justify-center gap-4 btn btn-secondary hover:bg-secondary-content hover:text-secondary h-16 w-md rounded-4xl">
                    <div className="text-4xl font-medium">Latest Collection</div>
                    <p className="text-4xl"><FaArrowRight /></p>
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <img src="/src/media/hero_image.png" alt="hero-image" />

            </div>
        </div>
    );
};

export default Hero;