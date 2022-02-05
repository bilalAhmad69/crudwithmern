import axios from "axios"; 
const url = "http://localhost:5000/api/";
export const getUser = async() =>{
       const result = await axios.get(url);
      return result.data

}
export const postUser = async(user)=>{
   const result = await axios.post(url,user);
   return result;
}
export const deleteUser = async(id)=>{
   return   await axios.delete(`${url}/${id}`);
}
export const updateUser = async(id,user)=>{

   return await axios.put(`${url}/${id}`,user);
}
