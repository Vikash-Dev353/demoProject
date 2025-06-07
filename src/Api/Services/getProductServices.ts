import axiosInstance from "../axiosInstance";


export const getProductServices = async () => {
  const response = await axiosInstance.get('/products');
  return response.data;
};
