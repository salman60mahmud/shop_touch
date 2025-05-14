import { createContext, useState, useEffect } from "react";

export const OurContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [data, setData] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    }
    return {}; // Initialize as empty if no saved cart
  });

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
        // Initialize cart items based on fetched products if it was initially empty
        if (Object.keys(cartItems).length === 0 && products.length > 0) {
          const initialCart = {};
          products.forEach(product => {
            initialCart[product.id] = 0;
          });
          setCartItems(initialCart);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // This effect saves cart items to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(cartItems).length > 0 && typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProduct.find((products) => products.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = {
    allProduct,
    data,
    newCollections,
    loading,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <OurContext.Provider value={contextValue}>
      {children}
    </OurContext.Provider>
  );
};

export default ContextProvider;