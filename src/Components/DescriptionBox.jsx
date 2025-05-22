const DescriptionBox = () => {
    return (
        <div className="my-10 sm:my-20 lg:my-30 mx-4 sm:mx-8 md:mx-14 lg:mx-18">
            <div className="flex">
                <div className="flex flex-wrap">
                    <h3 className="flex items-center justify-center font-semibold h-12 sm:h-14 lg:h-18 w-28 sm:w-36 lg:w-45 border-1 text-sm sm:text-base">Descriptions</h3>
                    <h3 className="flex items-center justify-center font-semibold h-12 sm:h-14 lg:h-18 w-28 sm:w-36 lg:w-45 border-1 text-[#555] bg-[#FBFBFB] text-sm sm:text-base">Reviews (122)</h3>
                </div>
            </div>

            {/* description text */}
            <div className="flex flex-col gap-4 sm:gap-6 border-1 p-4 sm:p-6 lg:p-10 pb-8 lg:pb-15">
                <p className="text-sm sm:text-base">Shop Touch is your ultimate destination for trendy, affordable, and high-quality fashion. As an online clothing store, we bring you the latest styles for every season, carefully curated to match your personality and lifestyle. <br /> <br />

                    What sets us apart? Whether you're looking for bold streetwear, elegant classics, or cozy loungewear, Shop Touch has something for everyone.</p>
                <p className="text-sm sm:text-base">We prioritize excellent customer service, fast shipping, and secure payment methods, making fashion both accessible and stress-free. Plus, our constantly updated collections mean you’ll always be ahead of the style curve.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;