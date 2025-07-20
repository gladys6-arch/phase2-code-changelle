import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./Components/Navbar";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import AddGoal from "./pages/Deposits"

function App(){
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/addgoal" element={<AddGoal/>} />
      </Routes>
    </Router>

  )
}


export default App;