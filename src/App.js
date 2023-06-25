import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Messenger from "./components/Messenger";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/messenger/login" element={<Login/>}/> 
      <Route path="/messenger/register" element={<Register/>}/> 
      <Route path="/" element={<ProtectRoute><Messenger/></ProtectRoute>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
