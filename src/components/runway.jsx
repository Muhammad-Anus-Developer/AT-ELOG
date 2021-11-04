import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";
import { Link } from "react-router-dom";

const Runway = () => {
    return (
        <div className="font back7">
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Runway Change</h1>
            </div>

            <div className="row App">
                <div className="col-md-6">
                    <label htmlFor="inp1" style={{ color: "#c9ada7", marginRight: "62%", paddingBottom: "1%" }}>Initial</label> <br />
                    <input className="px-3 py-2 mx-2 inpFoc" id="inp1" value="OMA" style={{ backgroundColor: "#e9edc9",marginBottom:"3%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" />

                </div>
                <div className="col-md-6">
                <label className="fw-bold"  htmlFor="inp2" style={{marginRight: "62%", paddingBottom: "1%" }}>Subject</label> <br />
                    <InputsHi type="text" id="inp2" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label className="fw-bold"  htmlFor="inp3" style={{marginRight: "62%", paddingBottom: "1%" }}>Vehicle</label> <br />

                    <InputsHi type="text" id="inp3" placeholder="Enter Vehicle" />

                </div>
                <div className="col-md-6">
                <label className="fw-bold"  htmlFor="inp4" style={{marginRight: "62%", paddingBottom: "1%" }}>Subject</label> <br />
                    <textarea id="inp4" className="px-2 mx-2 inpFoc radius" style={{ height: "80%", marginBottom:"3%" }} type="text" />
                </div>

                
            </div>


<div style={{paddingLeft:"8%", marginTop:"5%"}}>
<h5 className="fw-bolder fs-4" >Co-ordinate</h5>

<ul className="list">
    <li>Last Arrival</li>
    <li>Last Departure</li>
    <li>First operation on the new runway</li>
</ul>
<h5 className="fw-bolder fs-4" >Change the following Settings:</h5>

<ul className="list">
    <li>ILS</li>
    <li>Airfield lightning runway direction</li>
    <li>BA/BG Stop bar</li>
    <li>ATIS Update</li>
    <li>Rotate SID Display</li>
</ul>
<h5 className="fw-bolder fs-4" >Confirm All departures have the corrects SIDs:</h5>
<h5 className="fw-bold fs-5" >Notify the following of the runway in use:</h5>

<ul className="list">
    <li>DPN</li>
    <li>DXB Tower</li>
</ul>

</div>


            
            <button className="btn px-4 py-2" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginLeft:"8%", marginTop:"2%", marginBottom:"4%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%", marginTop:"2%", marginBottom:"4%"}}>Cancel</button>


        </div>
    )
}
export default Runway;