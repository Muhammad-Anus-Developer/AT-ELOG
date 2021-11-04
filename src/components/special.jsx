import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";
import { Link } from "react-router-dom";

const Special = () => {
    

    return (
        <div className="font back7">
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Special Entry</h1>
            </div>

<form>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas5"  >Time Stamp</label> <br />
                <InputsHi type="datetime-local" id="inp2" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas2"  >Subject*</label> <br />
                <InputsHi type="text" id="inp3" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp4" className="fw-bold clas2">Vehicle</label> <br />
                <InputsHi type="text" id="inp4" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp5" className="fw-bold clas2">Status</label> <br />
                <select id="inp5" className="px-2 py-2 mx-2 inpFoc bg-white radius" style={{ marginBottom:"4%"}}>
    <option selected >Select Status</option>
    <option value="1">Open</option>
    <option value="2">Close</option>
  </select>        
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp4" className="fw-bold clas2">ROSI</label> <br />
                <InputsHi type="text" id="inp4" placeholder="Enter ROSI" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp4" className="fw-bold clas5" >Description</label> <br />
                    <textarea id="inp4" className="px-2 mx-2 inpFoc radius" style={{ height: "80%", marginBottom:"3%" }} type="text" />
            
                </div>

                
            </div>
           
            <div style={{paddingBottom:"3%", marginTop:"5%"}}>
            <button className="btn px-4 py-2" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginLeft:"9%", marginBottom:"8%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%", marginBottom:"8%"}}>Cancel</button>
            </div>
</form>

        </div>
    )
}
export default Special;