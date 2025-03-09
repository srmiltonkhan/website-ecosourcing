import Axios from 'axios';
const api = Axios.create({
    baseURL: process.env.REACT_APP_DATABASE_URL
});
export default api