import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./createArticle.module.css";
import { useState } from "react";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";

function CreateArticle() {
const [article, setArticle] = useState({
  title:"", 
  date:""

})

const handleChangeArticle = (event)=>{
 // console.log(event.target.name ,event.target.value);

 switch (event.target.name) {
  case "title":
      setArticle((pervStats)=>({
        ...pervStats,
        title: event.target.value,
      }))
    break;

    case "date":
      setArticle((prevStats)=>({
        ...prevStats,
        date: event.target.value,
      }))  
    break;


}

};
console.log(article);


  return (
    <>
      <Navbar title="کریپتوباز" />
      <div className={styled.createArticlePage}>
        <div className={"container"}>
          <h1>ساخت مقاله</h1>

          <div className={styled.inputWrapper}> 
            <label> عنوان </label>
            <input name="title" onChange={handleChangeArticle} type="text" />
          </div>

          <div className={styled.inputWrapper}> 
            <label> تاریخ </label>
            <input name="date" onChange={handleChangeArticle} type="text" />
          </div>
          
        </div>
        </div>
      <Footer />
    </>
  );
}

export default CreateArticle;
