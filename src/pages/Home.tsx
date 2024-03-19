import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../types/product";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </>
  );
};

export default Home;
