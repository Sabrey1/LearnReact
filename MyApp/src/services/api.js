import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ use import.meta.env in Vite
});

export default api;



// VITE_API_URL=http://127.0.0.1:8000/api/