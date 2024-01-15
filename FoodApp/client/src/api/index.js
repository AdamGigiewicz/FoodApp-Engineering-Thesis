import axios from "axios";

export const baseURL = "http://localhost:5001/foodering-thesis/us-central1/app";

export const validateUserJWTToken = async (token) => {
    try{
        const res = await axios.get(`${baseURL}/api/users/jwtVerfication`, {
            headers : {Authorization : "Bearer " + token}
        })
        return res.data.data;
    }   catch(err){
        return null;
    }

};

export const addNewProduct = async (data) => {
    try{
        const res = await axios.post(`${baseURL}/api/products/create`, {...data})
        return res.data.data
    } catch(err){
        return null;
    }
}