import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className="flex bg-base-100 shadow-sm py-4 lg:px-12 xl:px-14 px-6">
            <div className="flex-1">
                <div className="flex items-center gap-4">
                    {/* Mobile logo - shows on small screens */}
                    <Link to='/' end className="hidden md:block flex-shrink-0">
                        <img className="h-10 w-auto" src="/Images/logo.png" alt="logo" />
                    </Link>
                    
                    {/* Brand name and admin panel text - responsive sizing */}
                    <p className="text-xl sm:text-2xl xl:text-3xl font-medium sm:font-semibold bubblegum-sans-font">
                        <Link to='/' end className="flex flex-col">
                            <span>SHOP Touch</span>
                            <span className='text-sm sm:text-xl text-red-500'>Admin Panel</span>
                        </Link>
                    </p>
                </div>
            </div>
            
            <div className="flex-none">
                <div className="avatar">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                        <img 
                            src="/Images/admin-profile.jpg" 
                            alt="Admin profile" 
                            className="object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;