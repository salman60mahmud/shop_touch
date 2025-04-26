import Hero from "../Components/Hero"
import Items from "../Components/Items";
import NewCollections from "../Components/NewCollections";
import NewsLetter from "../Components/NewsLetter";
import Offers from "../Components/Offers";
import Footer from "../Components/Footer"

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Items/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Shop;