import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import "./NewCollections.css";

const RelatedProducts = (props) => {
    const { newCollections, loading } = useContext(OurContext);
    const { category } = props;

    if (loading) return <div>Loading products...</div>;

    return (
        <div className="flex flex-col md:flex-col-2 items-center gap-2">
            <h1 className="text-5xl font-medium">Related Products</h1>
            <hr className="h-[6px] rounded-xl bg-black w-[10%]" />
            <div className="mt-12 flex gap-8 mb-10">

                {newCollections?.map(newCollections => {
                    if (category === newCollections.category) {
                        return (
                            <div className="lg:w-[390px] md:w-[240px]" key={newCollections.id}>
                                <Link to={`/products/${newCollections.id}`}> <img onClick={() => window.scrollTo(0, 0)} src={newCollections.image} alt="newCollections_image" /></Link>
                                <p>{newCollections.name}</p>
                                <div className="flex gap-20">
                                    <div className="collections-prices-new">
                                        Price: ${newCollections.new_price}
                                    </div>
                                    <div className="collections-prices-old">
                                        ${newCollections.old_price}
                                    </div>
                                </div>
                            </div>)
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default RelatedProducts;