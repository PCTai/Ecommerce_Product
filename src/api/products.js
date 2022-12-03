import axios from "axios";

const url= 'https://course-api.com/javascript-store-products';
const getProductApi= async () =>{
    try {
        return await axios.get(url).then(res => res.data);
        // console.log(data);
    } catch (error) {
        console.log('Error :', error);
    }
}

export {getProductApi}