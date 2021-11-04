import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const Buttons = (props) =>{
    return(
        <Link style={{textDecoration:"none"}} to={props.to}>  <button className="box spread-distance-box-shadow bg-white px-3 py-3 size fw-bold" style={{height:"65px", width:"100%"}} > <span className="text-dark sizing"> {props.name}</span> </button></Link>
    )
}
export default Buttons