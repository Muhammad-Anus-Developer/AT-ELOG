import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Mainview = () => {
    

    return (
        <div NaclassNameName="font back7" >
            <div className="App grad">
            <Link to="/dashboard">   <FaArrowLeft className="wids"  /> </Link>

                <img className="wid" src={logos} alt="logo" />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bolder my-5">E-Log Main View</h1>
            </div>

<div className="App">

<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UTC</th>
      <th scope="col">Subject</th>
      <th scope="col">Description</th>
      <th scope="col">ROSI</th>
      <th scope="col">Status</th>
      <th scope="col">Initial</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


</div>





        </div>
    )
}
export default Mainview;