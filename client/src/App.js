import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login"
import CustomerInvoices from "./components/CustomerInvoices"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Account from "./components/Account"
import NewCustomer from "./components/NewCustomer"
import NavBar from "./components/NavBar"


function App() {

 
  const [currentUser, setCurrentUser]= useState({})
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  // const [customerInfo, setCustomerInfo] = useState([])

  //   useEffect(()=>{
  //       fetch('/customers')
  //       .then(res=>res.json())
  //       .then(setCustomerInfo)
  //   },[])
  
  

  if(!login) {
  return (
    <Router>  
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/login" component={()=><Login login = {setLogin} currentUser={setCurrentUser}  setUser={setUser} />} />
              <Route path="/signup" component={()=><Signup users = {users} setUser={setUser}  setCurrentUser={setCurrentUser} currentUser={currentUser} login = {setLogin}/>} />
              <Route path='/' component={()=><Login login = {setLogin} setUser={setUser} setCurrentUser={setCurrentUser} />}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

  return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>  
          <Route path="/signup" component={()=><Signup users = {users} setUser={setUser}  setCurrentUser={setCurrentUser} currentUser={currentUser} login = {setLogin}/>} />
            <Route path="/login" component={()=><Login login = {setLogin} setUser={setUser} setCurrentUser={setCurrentUser} />} />
            <Route path='/home' component={() =><Home login = {setLogin} user = {user} setUser={setUser} currentUser={setCurrentUser}  />}/>
            <Route path='/navbar' component={() =><NavBar user = {setUser} login = {setLogin}/>}/>
            <Route path='/account' component={() =><Account login = {setLogin} user={user} setUser={setUser}/>}/>
            <Route path='/newcustomer' component={() =><NewCustomer login = {setLogin} user={user} />}/>
            <Route path='/customerinvoices' component={()=><CustomerInvoices  login = {setLogin} user={user}  />}/>
            <Route path='/' component={()=><Login login = {setLogin} setUser={setUser}/>} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );

}

export default App;
