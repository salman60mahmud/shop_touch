import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import './NewCollections.css';
import { Link } from "react-router-dom";

const NewCollections = () => {
    const { newCollections, loading } = useContext(OurContext);

    if (loading) return <div>Loading products...</div>;

    return (
        <div className="flex flex-col items-center">
            <h1 className="xl:text-5xl sm:text-3xl font-medium mt-28">NEW COLLECTIONS</h1>
            <hr className="horizontal2" />

            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:mt-20 sm:mt-8 xl:gap-10 sm:gap-6 xl:mx-30 sm:mx-20">

                {newCollections?.length > 0 ? (
                    newCollections.map(newCollections => (
                        <div className="collections" key={newCollections.id}>
                            <Link to={`/products/${newCollections.id}`}> <img onClick={() => window.scrollTo(0, 0)} src={newCollections.image} alt="newCollections.name" /></Link>
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
                    )) : (
                    <p>No product found</p>)}

            </div>
        </div>
    );
};

export default NewCollections;