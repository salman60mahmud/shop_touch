import AddProduct from "../Components/AddProduct";
import ProductList from "../Components/ProductList";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            {/* navbar */}
            <AdminNavbar />
            {/* admin part */}
            <div className="flex flex-col md:flex-row">
                <AdminSidebar />
                <Routes>
                    <Route path='/addproduct' element={<AddProduct />} />
                    <Route path='/listproduct' element={<ProductList />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;