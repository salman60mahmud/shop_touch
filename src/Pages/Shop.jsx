import Hero from "../Components/Hero"
import Items from "../Components/Items";
import NewCollections from "../Components/NewCollections";
import NewsLetter from "../Components/NewsLetter";
import Offers from "../Components/Offers";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Items/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
};

export default Shop;