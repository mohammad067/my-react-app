import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";


function ArticlePage() {
  const params = useParams(); /* برای گرفتن لینک صفحه ها */

  const [/*stats//اسم متغییر*/ article, /*setState // حالت اکشن*/ setArticle] =
    useState([null]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //تو استیرینگ میخوای جاوااسکریپت بنویسی میای از بک تیک و دلار و بریس استفاده میکنی

    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [params.id]);

  return (
    <>
      <Navbar title="کریپتوباز" />
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
             <Spinner/>

          ) : (
            <>
              <h1> {article.title} </h1>
              <div className={styled.articleInfo}>
                <span> تاریخ: {article.date} </span>
                <span>نویسنده: {article.athor} </span>
                <span>مدت زمان خواندن : {article.readingTime} دقیقه</span>
              </div>

              <img src={article.imageUrl} alt="اتریوم" />

              <p>{article.content}</p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
export default ArticlePage;
