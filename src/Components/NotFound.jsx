import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-18 mb-28">
            <h2 className="text-[18px] sm:text-2xl md:text-3xl font-medium text-center">PAGE NOT FOUND</h2>
            <div className="flex flex-col items-center">
                <div>
                    <p className="text-[16px] md:text-xl text-center mt-5">The page you were looking for doesn't exist.</p>
                    <p className="text-[16px] md:text-xl text-center">You may have mistyped the address or the page <br /> may have moved.
                    </p>
                </div>
                <div>
                    <Link to='/' end><button className="btn mt-6 md:mt-8 lg:mt-10 text-[15px] md:text-xl font-medium hover:bg-black hover:text-white border-1 border-zinc-900 md:h-12 md:w-64">CONTINUE SHOPPING</button></Link></div>
            </div>

        </div>
    );
};

export default NotFound;