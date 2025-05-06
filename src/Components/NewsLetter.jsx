const NewsLetter = () => {
    return (
        <div className="flex justify-between items-center flex-col my-8 md:my-16 lg:my-30 p-6 sm:p-10 md:p-16 lg:p-20 bg-gradient-to-b from-[#bac8f3] from-30% via-[#d7bbd7] via-60% to-[#d7bbd7] w-[90%] sm:w-[80%] md:w-[65%] h-auto md:h-[40vh] mx-auto rounded-lg md:rounded-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium md:font-semibold text-center">Get Exclusive Offers On Your Email</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium md:font-semibold mt-2 sm:mt-3 md:mt-5 text-center">Subscribe To Our Newsletter & Stay Updated</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-3 lg:mt-5 w-full max-w-md sm:max-w-xl md:max-w-2xl">
                <div className="w-full">
                    <label className="input rounded-3xl h-12 sm:h-14 px-4 sm:px-6 text-lg w-full font-poppins">
                        <input className="text-xl ml-3" type="email"
                            placeholder="Your Email Id" required />
                    </label>
                </div>
                <button className="w-full sm:w-40 h-12 sm:h-14 btn btn-neutral text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-300">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;