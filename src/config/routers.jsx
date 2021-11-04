import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "../components/login"
import Dashboard from "../components/dashboard"
import Lvo from "../components/lvo"
import Aircraft from "../components/aircraft"
import Inspection from "../components/inspection"
import Mainview from "../components/mainview"
import Metcondition from "../components/metCondition"
import Routine from "../components/routine"
import Movement from "../components/movement"
import Runway from "../components/runway"
import Special from "../components/special"
import FaultReporting from "../components/faultreporting";
import Memo from "../components/memo";

export default function Routers() {
  return (
    <Router>
      <div>
    
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/lvo" component={Lvo} />
          <Route path="/dashboard/aircraft" component={Aircraft} />
          <Route path="/dashboard/inspection" component={Inspection} />
          <Route path="/dashboard/mainview" component={Mainview} />
          <Route path="/dashboard/movement" component={Movement} />
          <Route path="/dashboard/metcondition" component={Metcondition} />
          <Route path="/dashboard/routine" component={Routine} />
          <Route path="/dashboard/runway" component={Runway} />
          <Route path="/dashboard/special" component={Special} />
          <Route path="/dashboard/faultreporting" component={FaultReporting} />
          <Route path="/dashboard/memo" component={Memo} />
        
          
        </Switch>
      </div>
    </Router>
  );
}
