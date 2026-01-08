import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom";
function Home() {


    const [/*state// اسم متغییر*/articles,/*setState // حالت اکشن*/setArticles] = useState([])
    //استیت وقتی تغییر میکنه ری رندر میشه و اتفاق میفته اما نتغییر در ریکت نمیفهمه

    useEffect(() => {
        // API call 

        axios.get("http://localhost:8000/articles").then((result) => {
            setArticles(result.data)
        })
            .catch((error) => {
                console.log(error);
            });


    }, []);



    return (
        <div className={styled.homeWrapper}>
            <Navbar title="کریپتوباز" />

            <div className="container">
                <h2>مقالات جدید</h2>
                <div className={styled.articles}>
                    {articles.map((article) => (//مپ  یه حلقه میزنه  و مقدار رو ریترن میکنه
                            <Link to={`/article/${article.id}`}>

                                <Article key={article.id} article={article} />

                            </Link>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;