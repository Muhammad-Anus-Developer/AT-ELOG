import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";
import { Link } from "react-router-dom";

const Aircraft = () => {
    

    return (
        <div className="font back7">
            <div className="App grad">
             <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>
                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Aircraft Diversion</h1>
            </div>

<form>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas1"  >Airport ATC Informed @ Time</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas4" >Aircraft Callsign</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas1"  >Time When Aircraft Diverts*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas4" >Aircraft Type*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas6" >SSR Transponder Code*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
              
                <label htmlFor="inp2" className="fw-bold clas7" >Point of Departure*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas6" >Intended Destination*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
              
                <label htmlFor="inp2" className="fw-bold clas4" >New Destination*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas6" >Actual Time of Arrival</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas1" >SAS OCC Informed @ Time</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
               
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas7" >Details / Reasons</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
              
                <label htmlFor="inp2" className="fw-bold clas3" >Diversion Arrival MSG Sent Time Stamp</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>

                
            </div>
           
            <div style={{paddingBottom:"1%", marginTop:"1%"}}>
            <button className="btn px-4 py-2 mar" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginBottom:"4%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%", marginBottom:"4%"}}>Cancel</button>
            </div>
</form>

        </div>
    )
}
export default Aircraft;