import "./sidebar.css"
import { FaRegSun, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import logos from "../images/logo.png"




const Sidebar = () => {


  

  return (
    <>
      

      <input type="checkbox" id="menu" />

      <nav className="grad">

        <div className="wrapper">
          <div className="navbar row">
            <div className="col-md-3 left">
           
            </div>
            <div className="col-md-4 ">
              <img src={logos} width="40%" alt="logo" style={{marginLeft:"30%"}} />



            </div>

            <div className="col-md-2">
              <span className="alignment text-center" style={{marginLeft:"20%"}}>
                <FaRegBell style={{ width: "30px", height: "30px", cursor: "pointer" }} className="text-dark" />
                <FaWifi style={{ width: "30px", height: "30px", marginLeft: "25px", cursor: "pointer" }} className={`icons ${navigator.onLine ? "active" : "deactive"}`} />
              </span>
            </div>

            <div className="col-md-2 right">

              <ul>
                <li style={{ listStyle: "none" }}>

                  <button style={{ borderRadius: "50px", border: "none", background: "transparent" }} >

                    <div style={{ marginTop: "20px" }}>
                      <img src="https://i.imgur.com/kDLvuKf.png" className="img" style={{marginBottom:"20%"}} alt="Admin" width="25%" alt="logo" />
                      {/* <p className="text-white" style={{marginBottom:"50px", paddingTop:"0"}}>User <span>as Admin</span></p> */}

                      {/* <i className="fas fa-angle-down mx-3 text-white" style={{ marginBottom: "20px" }} ></i> */}
                    </div>

                  </button>



                  <div className="dropdown" style={{ backgroundColor: "white" }}>

                    <button className="px-5" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaUserAlt className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Profile  </button>
                    <button className="px-5" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaRegSun className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Settings</button>
                    <button className="px-5" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaSignOutAlt className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Sign Out  </button>

                  </div>

                </li>
              </ul>
            </div>
          </div>
        </div>







        <label for="menu" class="menu-bar">

          <i class="fa fa-bars"></i>

        </label>

      </nav>

      <div class="side-menu">

        <center>
          <img src="https://i.imgur.com/kDLvuKf.png" />
          <br /><br />

          <h2>User</h2>
          <h5 className="text-white" style={{ letterSpacing: "3px" }}>as Admin</h5>
        </center>
        <br />

        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-user"></i><span>Customers</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-envelope"></i><span>Message</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-shopping-basket"></i><span>Products</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-home"></i><span>Statistices</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-ban"></i><span>Ban Customers</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-cog"></i><span>Setting</span></a>


        <a href="#" class="Logout"><span>Logout</span></a>


      </div>


      <div class="data">


      </div>






    </>
  )
}

export default Sidebar;