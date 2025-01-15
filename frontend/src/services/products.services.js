import axiosInstance from "./axios.config";

const getProducts = async () => {
    const result = await axiosInstance().get('/products');
    return result.data;
}

const getProductById = async (productId) => {
    const result = await axiosInstance().get(`/products/${productId}`);
    return result.data;
}

export {
    getProducts, 
    getProductById
};