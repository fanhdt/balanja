import axiosInstance from "./axios";

export const productApi = {
  getAll: async () => {
    const { data } = await axiosInstance.get("/admin/products");
    return data;
  },

  create: async (formData) => {
    const { data } = await axiosInstance.post("/admin/products", formData);
    return data;
  },
  update: async (id, formData) => {
    const { data } = await axiosInstance.put(`/admin/products/${id}`, formData);
    return data;
  },
};

export const orderApi = {
  getAll: async () => {
    const { data } = await axiosInstance.get("/admin/orders");
    return data;
  },
  updateStatus: async ({ orderId, status }) => {
    const { data } = await axiosInstance.patch(`/${orderId}/status`, { status });
    return data;
  },
};
