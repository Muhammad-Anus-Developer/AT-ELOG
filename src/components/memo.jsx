import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Memo = () => {
    

    return (
        <div NaclassNameName="font back7" >
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bolder my-5">Memo</h1>
            </div>

<div style={{marginLeft:"70%", marginBottom:"30px"}}>
<p className="fw-bold" style={{marginBottom:"10px", color:"gray"}} >Search</p>
                <select className="px-2 py-2 mx-2 inpFoc bg-white radius" style={{width:"70%"}}  type="search" aria-label="Search" >
    <option selected >Select Visibility</option>
    <option value="1">Active</option>
    <option value="2">Close</option>
  </select>

        <button className="btn btn-outline-success mx-2" id="inp4" type="submit">Search</button>
</div>

<div className="App">

<table className="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Document Number</th>
      <th scope="col">Details</th>
      <th scope="col">Type</th>
      <th scope="col">Publish Date</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Contains File</th>
    </tr>
  </thead>

</table>


</div>





        </div>
    )
}
export default Memo;