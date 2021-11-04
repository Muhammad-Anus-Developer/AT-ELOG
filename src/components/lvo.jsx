import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const LVO = () => {
    

    return (
        <div className="font back7" >
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">LVO</h1>
            </div>

<div className="row App padd py-5">

<div className="col-md-6">

<div className="card px-2 py-5" style={{backgroundColor:"#dedede"}}>
  
  <div className="containers">
    <h3 className="fw-bolder">Preparation Phase</h3>
    <p>Met Visibility 2000m or less or ceiling 1000ft 
and visibility forecasted to drop to 1500ft 
or below</p> 
  </div>
</div>


</div>
<div className="col-md-6">

<div className="card px-2 py-5" style={{backgroundColor:"#dedede"}}>
  
  <div className="containers">
    <h3  className="fw-bolder" >Safeguarding Phase</h3>
    <p>Met Visibility 1500ft or less or any RVR 1500ft
or less and forecasted to reduce further.
    </p> 
  </div>
</div>

</div>

</div>

<div className="row App padd">

<div className="col-md-6">

<div className="card px-2 py-5" style={{backgroundColor:"#dedede"}}>
  
  <div className="containers ">
    <h3  className="fw-bolder">Commencement Phase </h3>
    <p>Touchdown RVR is 600m or less or if no RVR,
the Met Visibility is 800m or less or the 
ceiling is 300ft or less</p> 
  </div>
</div>


</div>
<div className="col-md-6" style={{marginBottom:"5%"}}>

<div className="card px-2 py-5" style={{backgroundColor:"#dedede"}}>
  
  <div className="containers">
    <h3  className="fw-bolder">Discontinuation Phase</h3>
    <p>All RVR’s and Met Visibility greater than
1500m and ceiling is 500ft or greater and
forecast predicts further improvement
    </p> 
  </div>
</div>

</div>

</div>







        </div>
    )
}
export default LVO;