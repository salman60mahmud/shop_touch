import { FaArrowRight } from 'react-icons/fa6';
import './Offers.css';

const Offers = () => {
    return (
        <div className="relative my-18">
            {/* Video Background */}
            <div className="relative h-screen w-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
                >
                    <source src="/src/media/exclusive-video.mp4" type="video/mp4" />
                </video>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-4 md:px-6 lg:px-8 w-full max-w-6xl">
                    <div className="p-6 md:p-8 lg:p-10 rounded-xl inline-block">
                        <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 leading-tight'>
                            Exclusive
                        </h1>
                        <h1 className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight'>
                            Offers For You
                        </h1>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-3 md:mt-5 text-cyan-900'>
                            ONLY ON BEST SELLERS PRODUCTS
                        </p>
                        <button className="mt-4 md:mt-6 lg:mt-10 px-6 py-3 btn bg-blue-900 text-white hover:bg-white hover:text-blue-900 border-0 h-12 sm:h-14 md:h-16 xl:w-[300px] md:w-[260px] sm:w-auto mx-auto rounded-full flex items-center justify-center gap-2 sm:gap-4">
                            <span className="text-xl sm:text-2xl md:text-3xl exo-font">Check Now</span>
                            <FaArrowRight className="text-xl sm:text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;