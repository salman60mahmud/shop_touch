import { createContext, useState, useEffect } from "react";

export const OurContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [data, setData] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, dataRes, collectionsRes] = await Promise.all([
          fetch("/all_product.json"),
          fetch("/data.json"),
          fetch("/new_collections.json")
        ]);

        const [products, data, collections] = await Promise.all([
          productsRes.json(),
          dataRes.json(),
          collectionsRes.json()
        ]);

        setAllProduct(products);
        setData(data);
        setNewCollections(collections);
        setCartItems(getDefaultCart(products));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    for (let index = 0; index < products.length + 1; index++) {
      cart[index] = 0;
    }
    return cart;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }))
  }

  const contextValue = {
    allProduct,
    data,
    newCollections,
    loading,
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <OurContext.Provider value={contextValue}>
      {children}
    </OurContext.Provider>
  );
};

export default ContextProvider;