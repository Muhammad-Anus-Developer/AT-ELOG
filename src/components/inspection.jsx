import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";
import { Link } from "react-router-dom";

const Inspection = () => {
    

    return (
        <div className="font back7">
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Inspection</h1>
            </div>

<form>
            <div className="row App">
                <div className="col-md-6">
                    <label htmlFor="inp1" className="cla" >RWY Inspection Completed at</label> <br />
                    <input className="px-3 py-2 mx-2 inpFoc radius" id="inp1" value="05:53" style={{ backgroundColor: "#e9edc9",marginBottom:"4%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" />

                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas2"  >Vehicle</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas1"  >Runway Acceptable For Use?</label> <br />
                <select id="inp3" className="px-2 py-2 mx-2 inpFoc bg-white radius" style={{ marginBottom:"4%"}}>
    <option selected >Select</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>            
                </div>
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas2">Status</label> <br />
                <select id="inp3" className="px-2 py-2 mx-2 inpFoc bg-white radius" style={{ marginBottom:"4%"}}>
    <option selected >Select</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>   
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas3">Inspected Runway / Manoeuring Area*</label> <br />
                <select id="inp3" className="px-2 py-2 mx-2 inpFoc bg-white radius" style={{ marginBottom:"4%"}}>
    <option selected >Select</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>            
                </div>
                <div className="col-md-6">
                
                <label htmlFor="inp4" className="fw-bold clas2" >Remarks</label> <br />
                    <textarea id="inp4" className="px-2 mx-2 inpFoc radius py-2 px-1" placeholder="Enter Remarks..." style={{ height: "80%", marginBottom:"3%" }} type="text" />

                </div>

                
            </div>
            <div style={{paddingBottom:"3%", marginTop:"5%"}}>
            <button className="btn px-4 py-2" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginLeft:"9%", marginBottom:"4%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%", marginBottom:"4%"}}>Cancel</button>
            </div>
</form>

        </div>
    )
}
export default Inspection;