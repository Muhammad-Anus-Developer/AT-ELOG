import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "./button";
import Sidebar from "./sidebar";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/CardActions';
import { Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';


const Dashboard = () => {

    const ClickBait = () => {
        document.querySelector('.btns').addEventListener('click', (evt) => {
            evt.target.classList.add('loading')

            setTimeout(() => {
                evt.target.classList.remove('loading')
            }, 3000);
        })

    }

    return (
<>

       <div className="row">

<div className="col-md-2">
    <Sidebar />
</div>


        <div className="font back7 col-md-10">
            <div className="App grad">
            
{/* ------------------------ Navbar --------------------- */}



            </div>



            <div className="container my-5">
                <div className="row" style={{marginTop:"10%"}} >
                <div className="col-md-1"></div>

                    {/* <div className="col-md-2">
                        <Buttons name="Position Relief" />
                    </div> */}
                    <div className="col-md-2">
                        <Buttons name="Conditions" to="/dashboard/metcondition" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="General Entry" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Fault Reporting" to="/dashboard/faultreporting" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Supplement Instructions" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Document Library" />
                    </div>
                    <div className="col-md-1"></div>

                </div>
                <div className="row">
                <div className="col-md-1"></div>

                    <div className="col-md-2">
                        <Buttons name="Runway Change" to="/dashboard/runway" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Special Entry" to="/dashboard/special" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Emergency Checklist" />
                    </div>
                    {/* <div className="col-md-2">
                        <Buttons name="At E-Log" to="/dashboard/mainview" />
                    </div> */}
                    <div className="col-md-2">
                        <Buttons name="Temperory Instruction" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Memo" to="/dashboard/memo" />
                    </div>
                    <div className="col-md-1"></div>


                </div>
                <div className="row">
                <div className="col-md-1"></div>

                    <div className="col-md-2">
                        <Buttons name="Inspection" to="/dashboard/inspection" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="LVO" to="/dashboard/lvo" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Aircraft Diversion" to="/dashboard/aircraft" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Roster" />
                    </div>
                    {/* <div className="col-md-2">
                        <Buttons name="Notam" />
                    </div> */}
                    <div className="col-md-2" >
                        <Buttons name="Total Movement" to="/dashboard/movement" style={{fontSize:"17px"}}/>
                    </div>
                    <div className="col-md-1"></div>

                </div>
            </div>
           <Card sx={{marginLeft:"5%",marginRight:"5%"}}>
               <CardContent>
            <div className="mx-5">
                <div className="row" >
                    <div className="col-md-6">
                    <h2 className="py-2 px-2 text-dark fs-1 mx-4 my-2" style={{fontWeight:"bolder", fontFamily:"Poppins"}} >E- LOG</h2>

                    </div>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-4">

                    <ul>
                    <Button className="btns spread-distance-box-shadow hids" sx={{marginTop:"10%",marginRight:"8%",padding:"2%",borderRadius:"30px",backgroundColor:"#4dca62",'&:hover': {
       background: "#4dca52",

    }}}  variant="contained" onClick={() => ClickBait()}><span className="text" >
    Refresh
  </span>
  <span className="loading-animate"></span></Button>
                    {/* <button className="btns" style={{ marginLeft: "5%", marginTop:"5%" }} onClick={() => ClickBait()}>
                  <span className="text">
                    Dashboard
                  </span>
                  <span className="loading-animate"></span>
                </button> */}

              </ul>

                    </div>
                </div>
            </div>
            </CardContent>
            </Card>

            <Card sx={{margin:"1%"}}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-5"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Photometric Test, Runway 30 Photometric Test
        </Typography>
        </div>
        <div className="col-3">
        <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey",  fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>
            <Card sx={{margin:"1%"}}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-5"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Runway Inspection, RWY Lighting Inspection
        </Typography>
        </div>
        <div className="col-3">
        <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey",  fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>
            <Card sx={{margin:"1%"}}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-5"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        BCD, MOB 5, NTR
        </Typography>
        </div>
        <div className="col-3">
        <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>
            <Card sx={{margin:"1%"}}>
                <CardContent>
                    <div class="row">
<div className="col-1">
<span className="ic circle mx-5"></span>
    </div>
    <div className="col-7">
        <Typography variant="h6" style={{fontSize:"1.16em", fontFamily:"Poppins"}}>
        Runway Inspection
        </Typography>
        </div>
        <div className="col-3">
        <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>

            </div>
                    </div>
                    
                </CardContent>
            </Card>





            {/* <div className="border-bottom d-table w-100">
                <span className="ic circle mx-5"></span>
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > Photometric Test, Runway 30 Photometric Test </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                <span className="ic circle mx-5"></span>
                <p className="d-table-cell">

                    <p className="my-1 mx-2" > Runway Inspection </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                <span className="ic circle mx-5"></span>
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > BCD, MOB 5, NTR </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                <span className="ic circle mx-5"></span>
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" >Runway Inspection, RWY Lighting Inspection </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                <span className="ic circle mx-5"></span>
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > Runway Inspection </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid grey", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div> */}



        </div>
      
        </div>
        </>
    )
}

export default Dashboard;