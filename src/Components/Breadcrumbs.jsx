import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { FaFolder, FaSquarePlus, FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = ({ products }) => {
    const { loading } = useContext(OurContext);

    if (loading) return <div>Loading products...</div>;

    return (
        <div>
            {products && (
                <div className="flex items-center gap-2 my-14 mx-30">
                    <FaFolder className="inline" />
                    <span>HOME</span>
                    <FaAngleRight className="inline" />
                    <FaFolder className="inline" />
                    <span>SHOP</span>
                    <FaAngleRight className="inline" />
                    <FaFolder className="inline" />
                    <span>{products.category.charAt(0).toUpperCase() +
                        products.category.slice(1).toLowerCase()}</span>
                    <FaAngleRight className="inline" />
                    <FaSquarePlus className="inline" />
                    <span>{products.name}</span>
                </div>
            )}
        </div>
    );
};

export default Breadcrumbs;