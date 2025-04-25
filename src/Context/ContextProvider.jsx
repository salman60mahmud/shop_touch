import { createContext, useState, useEffect } from "react";

export const OurContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [data, setData] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    allProduct,
    data,
    newCollections,
    loading
  };

  return (
    <OurContext.Provider value={contextValue}>
      {children}
    </OurContext.Provider>
  );
};

export default ContextProvider;
