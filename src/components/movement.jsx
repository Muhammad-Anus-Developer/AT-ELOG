import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";
import { Link } from "react-router-dom";

const Movement = () => {
    

    return (
        <div className="font back7">
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Total Movement</h1>
            </div>

<form>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas5"  >Time Stamp</label> <br />
                <InputsHi type="datetime-local" id="inp2" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas5"  >VFR Count*</label> <br />
                <InputsHi type="text" placeholder="Enter Count" id="inp3" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp4" className="fw-bold clas5"  >IFR Count*</label> <br />
                <InputsHi type="text" placeholder="Enter Count" id="inp4" />
                </div>
               
                <div className="col-md-6">
                <label htmlFor="inp5" className="clas7 fw-bold" style={{paddingBottom: "1%" }}>Total Runway Count*</label> <br />
                    <input className="px-3 py-2 mx-2 inpFoc radius" id="inp5" value="Enter Count" style={{ backgroundColor: "#e9edc9",marginBottom:"4%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" />

                </div>
                            
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp6" className="clas7 fw-bold" style={{paddingBottom: "1%" }}>OverFlights Count*</label> <br />
                <InputsHi type="text" placeholder="Enter Count" id="inp6" />
                </div>
               
                <div className="col-md-6">
               
                <label htmlFor="inp7" className="clas4 fw-bold" style={{paddingBottom: "1%" }}>Total Movement*</label> <br />
                <input className="px-3 py-2 mx-2 inpFoc radius" id="inp7" value="Enter Count" style={{ backgroundColor: "#e9edc9",marginBottom:"4%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" />

                </div>
                            
            </div>
           


            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp8" className="fw-bold clas2" >Remarks</label> <br />
                    <textarea id="inp8" className="px-2 mx-2 inpFoc radius"style={{ height: "80%", marginBottom:"3%" }} type="text" />
            
                </div>
                <div className="col-md-6">
             
                </div>

                
            </div>
            <div style={{paddingBottom:"3%", marginTop:"5%"}}>
            <button className="btn px-4 py-2" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginLeft:"9%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%"}}>Cancel</button>
            </div>
</form>

        </div>
    )
}
export default Movement;