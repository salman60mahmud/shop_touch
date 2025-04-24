import { createContext, useState, useEffect } from "react";

export const OurContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [data, setData] = useState([]);
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch("/all_product.json")
      .then(res => res.json())
      .then(data => setAllProduct(data));

    fetch("/data.json")
      .then(res => res.json())
      .then(data => setData(data));

    fetch("/new_collections.json")
      .then(res => res.json())
      .then(data => setNewCollections(data));
  }, []);

  return (
    <OurContext.Provider value={{ allProduct, data, newCollections }}>
      {children}
    </OurContext.Provider>
  );
};

export default ContextProvider;
