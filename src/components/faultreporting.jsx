import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";
import { Link } from "react-router-dom";

const FaultReporting = () => {
    return (
        <div className="font back7">
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Fault Reporting</h1>
            </div>

            <div className="row App">
                <div className="col-md-6">
                    {/* <label htmlFor="inp1" style={{ color: "#c9ada7", marginRight: "62%", paddingBottom: "1%" }}>Initial</label> <br />
                    <input className="px-3 py-2 mx-2 inpFoc" id="inp1" value="OMA" style={{ backgroundColor: "#e9edc9",marginBottom:"3%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" /> */}
   <label className="fw-bold clas5"  htmlFor="inp2" >Time Stamp</label> <br />
                    <InputsHi type="datetime-local" id="inp2" />
                </div>
                <div className="col-md-6">
                <label className="fw-bold clas5"  htmlFor="inp3" >Equipment</label> <br />

                    <InputsHi type="text" id="inp3" placeholder="Enter Equipment" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label className="fw-bold clas5"  htmlFor="inp4" >Description</label> <br />
                    <textarea id="inp4" className="px-2 mx-2 inpFoc radius" style={{ height: "80%", marginBottom:"3%" }} type="text" />

                </div>
                <div className="col-md-6">
               
                </div>

                
            </div>


            
            <button className="btn px-4 py-2" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginLeft:"8%", marginTop:"2%", marginBottom:"4%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%", marginTop:"2%", marginBottom:"4%"}}>Cancel</button>


        </div>
    )
}
export default FaultReporting;