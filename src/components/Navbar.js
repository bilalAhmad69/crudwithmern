import {AppBar , makeStyles, Toolbar , Typography} from "@material-ui/core"
 import { NavLink} from "react-router-dom";
 const useStyle = makeStyles(({
        link:{
            color:"white",
            textDecoration:"none",
            fontSize:20,
            marginRight:20
        }
 }))
const Navbar = ()=>{
    const classes = useStyle();
    return (
        <AppBar position="static">

            <Toolbar>
                  <NavLink to = "/" className={classes.link}>
                         MERN-STACK
                  </NavLink>
                  <NavLink to= "/all" className={classes.link}>
                         All-User
                  </NavLink >
                  <NavLink to ="/add" className={classes.link}>
                         Add-User
                  </NavLink>
            </Toolbar>
            

        </AppBar>
               
    )
}
export default Navbar;