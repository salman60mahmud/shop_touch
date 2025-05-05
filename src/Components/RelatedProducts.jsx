import { useContext } from "react";
import { OurContext } from "../Context/ContextProvider";
import "./NewCollections.css";

const RelatedProducts = () => {
    const { data, loading } = useContext(OurContext);


    if (loading) return <div>Loading products...</div>;

    return (
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-medium">Related Products</h1>
            <hr className="h-[6px] rounded-xl bg-black w-[10%]"/>
            <div className="mt-12 flex gap-8 mb-10">

                {data?.map(data => (
                    <div className="w-[390px]" key={data.image}>
                        <img src={data.image} alt="data_image" />
                        <p>{data.name}</p>
                        <div className="flex gap-20">
                            <div className="collections-prices-new">
                                Price: ${data.new_price}
                            </div>
                            <div className="collections-prices-old">
                                ${data.old_price}
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default RelatedProducts;