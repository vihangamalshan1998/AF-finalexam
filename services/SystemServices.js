import axios from 'axios';

//product Service URLS
const GETALL_PRODUCT_API_BASE_URL = "http://localhost:8070/products/all";
const ADD_PRODUCT_API_BASE_URL = "http://localhost:8070/products/add";
const GET_PRODUCT_USINGID_API_BASE_URL = "http://localhost:8070/products/product";
const DELETE_PRODUCT_USINGID_API_BASE_URL = "http://localhost:8070/products/delete";


//Catergory Service URLS
const GETALL_CATERGORY_API_BASE_URL = "http://localhost:8070/catergery/all";
const ADD_CATERGORY_API_BASE_URL = "http://localhost:8070/catergery/add";
const GET_CATERGORY_USINGID_API_BASE_URL = "http://localhost:8070/catergery/catergory";

class SystemServices{

    //add Catergory
    addcatergories(catergory){
        return axios.post(ADD_CATERGORY_API_BASE_URL, catergory);
    }

    //add product
    addproducts(product) {
        return axios.post(ADD_PRODUCT_API_BASE_URL, product);
    }

    //get all products
    getProductsDetails() {
        return axios.get(GETALL_PRODUCT_API_BASE_URL);
    }

    //get all catergories
    getCatergoryDetails() {
        return axios.get(GETALL_CATERGORY_API_BASE_URL);
    }

    //get product using product id
    getProductusingproductnid(id) {
        return axios.get(GET_PRODUCT_USINGID_API_BASE_URL + '/' + id)
    }

    //get catergory using catergory id
    getCatergoryusingpCatergorynid(id) {
        return axios.get(GET_CATERGORY_USINGID_API_BASE_URL + '/' + id)
    }

    //delete product using id
    deletePrductById(id) {
        return axios.delete(DELETE_PRODUCT_USINGID_API_BASE_URL + '/' + id);
    }

}

export default new SystemServices();