const Offers = () => {
    return (
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] h-[70vh] sm:h-[60vh] flex flex-col lg:flex-row mx-auto my-20 sm:my-32 md:my-40 rounded-xl bg-gradient-to-b from-[#e9b6ed] via-[#e3dcc2ce] to-[#e3dcc2ce]">
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium text-blue-900'>Exclusive</h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium'>Offers For You</h1>
                <p className='text-xl sm:text-2xl font-semibold mt-2 sm:mt-4 text-cyan-900'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="btn btn-secondary hover:bg-secondary-content hover:text-secondary h-10 sm:h-12 w-36 sm:w-48 text-lg sm:text-xl md:text-2xl rounded-3xl mt-2 sm:mt-4">
                    Check Now
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center overflow-hidden p-4 sm:p-8 sm:hidden lg:block">
                <img
                    src="/src/media/exclusive_image.png"
                    alt="exclusive-image"
                    className="h-full w-full object-contain mt-8 lg:mt-8 max-h-[300px] lg:max-h-none"
                />
            </div>
        </div>
    );
};

export default Offers;