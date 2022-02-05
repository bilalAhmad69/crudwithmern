import { FormControl, FormGroup, Input, InputLabel , Button, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import {postUser,updateUser} from "../Services/api"
const useStyle =  makeStyles({
    container:{
        width:"50%",
        margin:"auto",
        marginTop:"5%",
        '& > * ':{
            marginTop:"20px"
        }
    }
})
const person = {
    name : "",
    username : "",
    email : "",
    phone : ""
}
const AddUser = ({flag , singlePerson}) =>{
    
    const classes = useStyle();
    const navigate = useNavigate();
    const [user , setUser] = useState(person);
    const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");

    useEffect(()=>{
      if (flag)
      {
          const sPerson = singlePerson.person[0];
           setName(sPerson.name);
           setEmail(sPerson.email);
           setUsername(sPerson.username);
           setPhone(sPerson.phone);
           
      }
    },[])
   const sendData= async () =>{
   const result =  await postUser(user);
    navigate("/all");
   }
   const updateData= async () =>{
      
    const result =  await updateUser(singlePerson.person[0]._id , user);
     navigate("/all");
    }

    const setData = (event)=>{
        event.preventDefault();
        Object.assign(person,{name:name,username:username,email:email,phone:phone})
       setUser(person);
       flag ? updateData():sendData();
    }
    return(
        <FormGroup className = {classes.container}>
            <Typography variant="h4"> {flag ? "Edit Information" : "Add User"}  </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(value)=>{setName(value.target.value)}} value = {name}/>
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(value)=>{setUsername(value.target.value)}} value = {username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(value)=>{setEmail(value.target.value)}} value = {email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(value)=>{setPhone(value.target.value)}} value = {phone} />
            </FormControl>
            <Button variant="contained" color = "primary" onClick={setData}>{flag ? "Edit" : "Add"}</Button>
        </FormGroup>
       
    )
}
export default AddUser;