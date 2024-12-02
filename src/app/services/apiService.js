import axios from 'axios';
import Cookies from 'js-cookie';

// const BASE_URL = 'http://127.0.0.1:8000/api/';
const BASE_URL = 'https://tepe.kofcorporation.com/api/';
let user_token = '';

const createAxiosInstance = () => {
  const userToken = Cookies.get('user_token'); // Récupère le cookie 'user_token' avec js-cookie
  console.log(userToken);
  user_token = userToken;
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${userToken}`, // Utilise le token du cookie
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};

const apiService = {
  createResource: async (endpoint, data) => {
    try {
      const response = await createAxiosInstance().post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la création sur l'endpoint ${endpoint}`, error);
      throw error;
    }
  },

  getAllResources: async (endpoint) => {
    try {
      const response = await createAxiosInstance().get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des données sur l'endpoint ${endpoint}`, error);
      throw error;
    }
  },
  getEnterprises: async (endpoint) => {
    try {
      const response = await createAxiosInstance().get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des données sur l'endpoint ${endpoint}`, error);
      throw error;
    }
  },

  getResourceById: async (endpoint, id) => {
    try {
      const response = await createAxiosInstance().get(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'ID ${id} sur l'endpoint ${endpoint}`, error);
      throw error;
    }
  },
  

  updateResource: async (endpoint, id, data) => {
    try {
      const response = await createAxiosInstance().put(`${endpoint}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'ID ${id} sur l'endpoint ${endpoint}`, error);
      throw error;
    }
  },

  deleteResource: async (endpoint, id) => {
    try {
      const response = await createAxiosInstance().delete(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'ID ${id} sur l'endpoint ${endpoint}`, error);
      throw error;
    }
  },
};
export {user_token};
export {BASE_URL};
export default apiService;

