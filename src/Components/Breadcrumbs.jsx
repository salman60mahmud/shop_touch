import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FaFolder, FaSquarePlus, FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = ({ products }) => {
    const { loading } = useContext(OurContext);

    if (loading) return <div>Loading products...</div>;

    return (
        <div>
            {products && (
                <div className="flex items-center gap-2 my-8 md:my-14 mx-6
                 md:mx-30">
                    <FaFolder className="hidden md:inline" />
                    <span>HOME</span>
                    <FaAngleRight className="inline" />
                    <FaFolder className="hidden md:inline" />
                    <span>SHOP</span>
                    <FaAngleRight className="inline" />
                    <FaFolder className="hidden md:inline" />
                    <span>{products.category.charAt(0).toUpperCase() +
                        products.category.slice(1).toLowerCase()}</span>
                    <FaAngleRight className="inline" />
                    <FaSquarePlus className="hidden md:inline" />
                    <span>{products.name}</span>
                </div>
            )}
        </div>
    );
};

export default Breadcrumbs;