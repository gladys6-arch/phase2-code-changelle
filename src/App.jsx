import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./Components/Navbar";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Deposits from "./pages/Deposits";
import ProgressPage from "./pages/ProgressPage"

function App(){
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/progress" element={<ProgressPage/>} />

      </Routes>
    </Router>

  )
}


export default App;