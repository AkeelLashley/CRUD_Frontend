import axios from "axios";
import { ProductType } from "../types/product";

// http://localhost:8000/todos
// https://product-backend-3v99.onrender.com/todos
const API_URL = "http://localhost:8000/products";

// Fetch all products
export const getAllProducts = () => axios.get(API_URL);

// Create a new product
export const createProduct = (productData: ProductType) =>
  axios.post(API_URL, productData);

// Get a single product
export const getProductById = (id: string) => axios.get(`${API_URL}/${id}`);
export const getProductByCategory = (userInput: string) =>
  axios.get(`${API_URL}/category/${userInput}`);

// Update a product
export const updateProduct = (id: string, productData: ProductType) =>
  axios.patch(`${API_URL}/${id}`, productData);

// Delete a product
export const deleteProduct = (id: string) => axios.delete(`${API_URL}/${id}`);
