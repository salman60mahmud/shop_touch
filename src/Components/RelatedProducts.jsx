import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import "./NewCollections.css";

const RelatedProducts = (props) => {
    const { newCollections, loading } = useContext(OurContext);
    const { category } = props;

    if (loading) return <div>Loading products...</div>;

    return (
        <div className="flex flex-col items-center gap-2">
            <h1 className="xl:text-5xl sm:text-4xl text-2xl font-medium">Related Products</h1>
            <hr className="h-[6px] rounded-xl bg-black w-[10%]" />
            <div className="xl:mt-12 sm:mt-8 mt-4 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 sm:gap-6 mx-5 mb-10">

                {newCollections?.length > 0 ? (
                    newCollections.map(newCollections => {
                        if (category === newCollections.category) {
                            return (
                                <div className="lg:w-[390px] md:w-[240px]" key={newCollections.id}>
                                    <Link to={`/products/${newCollections.id}`}> <img onClick={() => window.scrollTo(0, 0)}
                                    src={newCollections.image} alt="newCollections.name"
                                    className="mx-auto w-full max-w-full h-auto object-contain hover:lg:scale-110 transition-transform duration-600" /></Link>
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
                    }
                    )) : (
                    <p>No related products found</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;