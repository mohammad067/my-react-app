import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

function Home() {

  const [/*state// اسم متغییر*/ articles, /*setState // حالت اکشن*/ setArticles, ] = useState([]);
  //استیت وقتی تغییر میکنه ری رندر میشه و اتفاق میفته اما نتغییر در ریکت نمیفهمه

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // API call
    
    setIsLoading(true);

    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="کریپتوباز" />
     
      <div className="container">
        <h2>مقالات جدید</h2>
        
        {/* shart ? true :false */}
        {isLoading ? (
           <Spinner/>
        ) : (
          <div className={styled.articles}>
            {articles.map(
              (
                article //مپ  یه حلقه میزنه  و مقدار رو ریترن میکنه
              ) => (
                <Link to={`/article/${article.id}`}>
                  <Article key={article.id} article={article} />
                </Link>
              )
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
