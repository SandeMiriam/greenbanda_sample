import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Nav"
import Home from "./components/Home";
import Fruits from "./components/Fruits"
import Vegetables from './components/Veg';
import Search from './components/SearchBar';
// import SignUp from './components/SignUp';
// import Cards  from './components/Cards';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/' exact component={Vegetables} />
        <Route path='/' component={Fruits} />
        <Route path='/Search' component={Search} /> */}
        {/* <Route path='/login' component={SignUp} /> */}

        {/* <Route path='/Cards' component={Cards} /> */}

      </Switch>
    </Router>
  );
}

export default App;






















// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Veg from "./components/Veg";
// import Fruits from "./components/Fruits";
// // import Login from "./components/Login";
// // import SignUp from "./components/SignUp";
// import Nav from "./components/Nav";


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/">
//             <Nav />
//             <Home />
//             {/* <SignUp/>
//             <Login/> */}

//           </Route>
//           <Route exact path="/veg">
//             <Veg />
//           </Route>
//           <Route exact path="/fruits">
//             <Fruits />
//           </Route>
          
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
