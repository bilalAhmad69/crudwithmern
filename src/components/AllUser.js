import { Table, TableBody, TableCell, TableHead, TableRow , Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import {getUser , deleteUser} from "../Services/api";
import AddUser from "../components/AddUser"

const useStyle = makeStyles({
    thead:{
        background:"black",
        
    },
    theadcell:{
        fontSize:"30px",
        '& > *':{
            color:"white"
        }
    }
})
const AllUser = () =>{
    const classes = useStyle();
    const [user , setUser] = useState([]);
    const [isShowEdit , setIsShowEdit] = useState(false);
    const [person , setPerson] =  useState();

    const handleDelete = async(e)=>{
          const result = await deleteUser(e.currentTarget.id);
          if(result.status == 200)
          setUsers();
         
           
    } 
    
    const handleEdit = async(e)=>{
           setIsShowEdit(true);
           const Singleperson = user.filter((per)=>per._id === e.currentTarget.id);
           setPerson(Singleperson);
             }
    const setUsers = async () =>{
        const users = await getUser();
        setUser(users);
    }
    useEffect(()=>{
        setUsers();
        setIsShowEdit(false);
        
    }, []);
    if(isShowEdit) return (
    <div>
        <Button variant="contained" color="secondary" style={{marginTop:"10px"}} 
        onClick = {()=>{setIsShowEdit(false)}}>
            Close</Button>
        <AddUser flag={true} singlePerson = {{person}}  show = {isShowEdit}/>
    </div>
    
    
    )
    else
    return(
        <Table style={{marginTop:"10px"}}>
            <TableHead className={classes.thead}>
                <TableRow className={classes.theadcell}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Edit/Delete</TableCell>


                </TableRow>
            </TableHead>
            
            <TableBody>
                
            {user.map((person) =>{
                const {_id,name , username , email , phone} = person; 
               return(
            <TableRow key = {_id}>
                    <TableCell>{_id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{username}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{phone}</TableCell>
                    <TableCell>
                        <Button variant="contained" 
                        color="primary" style={{marginRight:"5px"}} id = {_id}
                        onClick={handleEdit}>    
                            Edit</Button>
                        <Button variant="contained" color = "secondary" id = {_id}
                        onClick= {handleDelete}>
                            Delete</Button>

                    </TableCell>
                </TableRow>
             ) })}
            </TableBody>
            
        </Table>
    )
}
export default AllUser;