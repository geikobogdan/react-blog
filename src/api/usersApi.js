
import axios from "axios";


export const UsersApi = ()=>{     
  return axios.get("/users").then(({ data }) => data);
};

export const SignUpUser=(payload)=> {
  return axios.post("/users",payload);
 }