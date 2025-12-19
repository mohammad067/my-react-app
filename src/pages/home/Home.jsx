import { useEffect,useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer"
function Home() {


    const [/*state*/articles,/*setState*/setArticles]= useState([])
//استیت وقتی تغییر میکنه ری رندر میشه و اتفاق میفته اما نتغییر در ریکت نمیفهمه
    
    useEffect(()=>{
        // API call 

        axios.get("http://localhost:8000/articles").then((result)=>{
            setArticles (result.data.data)
        })
        .catch((error)=>{
            console.log(error);
        });
             
       
    },[]);
 
 
 
    return (
        <div className={styled.homeWrapper}>
            <Navbar title="کریپتوباز" />

            <div className="container">
                <h2>مقالات جدید</h2>
                <div className={styled.articles}>
                    {//مپ  یه حلقه میزنه  و مقدار رو ریترن میکنه
                        articles.map((article) => (
                            <Article key={article.id} article={article} />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;