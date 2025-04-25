
const NewsLetter = () => {
    return (
        <div className="flex justify-between items-center flex-col mb-40">
            <h1 className="text-5xl font-semibold">Get Exclusive Offers On Your Email</h1>
            <p className="text-3xl font-semibold mt-5">Subscribe To Our Newsletter & Stay Updated</p>
            <div className="join mt-5 relative">
                <div>
                    <label className="input rounded-3xl h-14 w-96 font-poppins">
                        <input className="text-xl ml-3" type="email"
                            placeholder="Your Email Id" required />
                    </label>
                </div>
                <button className="btn btn-neutral rounded-4xl h-14 w-40 absolute" style={{
                    transform: 'translateX(210%)'
                }}>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;