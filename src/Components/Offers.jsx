import './Offers.css'

const Offers = () => {
    return (        
        <div className="offers">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className='text-6xl font-medium text-blue-900'>Exclusive</h1>
                <h1 className='text-6xl font-medium'>Offers For You</h1>
                <p className='text-2xl font-semibold mt-4 text-cyan-900'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="btn btn-secondary hover:bg-secondary-content hover:text-secondary h-12 w-48 text-2xl  rounded-3xl mt-4">
                    Check Now
                </button>
            </div>

            <div className="flex-1 flex justify-center">
                <img src="/src/media/exclusive_image.png" alt="exclusive-image" />
            </div>
        </div>
    );
};

export default Offers;