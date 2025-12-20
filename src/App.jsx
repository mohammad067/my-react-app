
import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { Route,Routes } from "react-router-dom";//هر روتی (صفحه)ایی که اضافه کنیم به روترز ریخته میشه


function App() {
  return (
   
    <div>

     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/About" element={<AboutUs/>}/>
     </Routes>
    </div>
  );
}


export default App;
