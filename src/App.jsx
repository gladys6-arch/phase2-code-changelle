import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import NavBar from "./Components/Navbar";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Deposits from "./pages/Deposits";
import ProgressPage from "./pages/ProgressPage"


function App(){
  return (
  <>
  <NavBar/>
   <main>
   <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/home" element={<Home />} />
  <Route path="/goals" element={<Goals />} />
  <Route path="/deposits" element={<Deposits />} />
  <Route path="/progress" element={<ProgressPage />} />
  <Route path="*" element={<h2>404: Page Not Found</h2>} />
</Routes>
</main>
</>

  )
}


export default App;