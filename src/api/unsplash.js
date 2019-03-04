import axios from "axios";

 export default axios.create({
     baseURL : "https://api.unsplash.com",

     headers : {
        Authorization: "Client-ID 9e0fd970e67f5038144da9cb1d302b9a12a21c7f081f4c9d73082c6a9670f0fc"
    }

 })