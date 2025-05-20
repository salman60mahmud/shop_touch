const NewsLetter = () => {
    return (
        <div className="flex justify-between items-center flex-col my-8 md:my-16 lg:my-30 p-6 sm:p-10 md:p-16 lg:p-20 bg-gradient-to-b from-[#bac8f3] from-30% via-[#d7bbd7] via-60% to-[#d7bbd7] sm:w-[80%] xl:w-[65%] h-auto md:h-[40vh] mx-auto sm:rounded-lg md:rounded-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium md:font-semibold text-center">Get Exclusive Offers On Your Email</h1>
            <p className="text-[16px] sm:text-2xl lg:text-3xl font-medium md:font-semibold mt-2 sm:mt-3 md:mt-5 text-center">Subscribe To Our Newsletter & Stay Updated</p>
            
            <div className="join mt-5">
                <div>
                    <label className="input validator join-item rounded-l-xl sm:w-full lg:w-96 sm:h-14 px-4 sm:px-6 sm:text-lg">
                        <input type="email" placeholder="Enter Your Email" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                </div>
                <button className="btn btn-neutral join-item rounded-r-2xl w-32 sm:w-40 sm:h-14 sm:text-lg font-medium">Subscription</button>
            </div>
        </div>
    );
};

export default NewsLetter;