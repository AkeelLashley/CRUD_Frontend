import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../api/productsApi";
import { ProductType } from "../types/product";
import { BeatLoader } from "react-spinners";

const ProductDetail = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await getProductById(id);

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      const response = await deleteProduct(id);
      console.log("🚀 ~ handleDelete ~ response:", response);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {/* <button onClick={() => setModalOpen(true)}>Update Product</button> */}
          <button onClick={handleDelete}>
            {/* Delete Product */}
            {isLoading ? <p>Deleting...</p> : <p>Delete Product</p>}
          </button>
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}
    </>
  );
};

export default ProductDetail;
