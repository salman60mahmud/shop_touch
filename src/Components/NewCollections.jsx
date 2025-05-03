import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import './NewCollections.css';
import { Link } from "react-router-dom";

const NewCollections = () => {
    const { newCollections, loading } = useContext(OurContext);

    if (loading) return <div>Loading products...</div>;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-medium mt-28">NEW COLLECTIONS</h1>
            <hr className="horizontal2" />

            <div className="grid grid-cols-4 mt-20 gap-10 mb-40">

                {newCollections?.map(newCollections => (
                    <div className="collections">
                       <Link to={`/products/${newCollections.id}`}> <img src={newCollections.image} alt="data_image" /></Link>
                        <p>{newCollections.name}</p>
                        <div className="flex gap-20">
                            <div className="collections-prices-new">
                                Price: ${newCollections.new_price}
                            </div>
                            <div className="collections-prices-old">
                                ${newCollections.old_price}
                            </div>
                        </div>
                    </div> 

                ))}

            </div>
        </div>
    );
};

export default NewCollections;