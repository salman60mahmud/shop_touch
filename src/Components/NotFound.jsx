import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="h-[680px] w-auto"
            style={{ backgroundImage: `url("/Images/not-found.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center',    backgroundRepeat: 'no-repeat' }}>
            <h2 className="text-[18px] sm:text-2xl md:text-3xl xl:text-4xl font-medium text-center pt-34 md:pt-24 xl:pt-28 mb-8">PAGE NOT FOUND</h2>
            <div className="flex flex-col items-center">
                <div className='bubblegum-sans-font font-medium border-1 rounded-2xl px-8 py-3 bg-amber-100 border-zinc-900'>
                    <p className="text-[16px] md:text-3xl text-center mt-5">The page you were looking for doesn't exist.</p>
                    <p className="text-[16px] md:text-3xl text-center">You may have mistyped the address or the page <br /> may have moved.
                    </p>
                </div>
                <div>
                    <Link to='/' end><button className="btn mt-6 md:mt-8 lg:mt-10 text-[15px] md:text-xl font-medium hover:bg-black hover:text-white border-1 border-zinc-900 md:h-12 md:w-64">CONTINUE SHOPPING</button></Link></div>
            </div>
        </div>
    );
};

export default NotFound;