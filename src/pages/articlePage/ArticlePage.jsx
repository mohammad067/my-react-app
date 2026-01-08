import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";


function ArticlePage() {
  const params = useParams();/* برای گرفتن لینک صفحه ها */
  

  const [/*stats//اسم متغییر*/article,/*setState // حالت اکشن*/ setArticle] = useState([null]);

  useEffect(() => {
    //تو استیرینگ میخوای جاوااسکریپت بنویسی میای از بک تیک و دلار و بریس استفاده میکنی
    axios
    .get(`http://localhost:8000/articles/${params.id}`)
    .then((result) => {
      setArticle(result.data);;
    })
    .catch((error)=>{
      console.log(error);
      
    });
    
  }, [params.id]);
 if (!article) return <div>در حال بارگذاری...</div>;

  return (
    <div>
      <Navbar title="کریپتوباز" />
      <div className={styled.articleWrapper}>
        <div className="container">
          <h1> {article.title} </h1>
          <div className={styled.articleInfo}>
            <span>  تاریخ: {article.date} </span>
            <span>نویسنده: {article.athor}  </span>
            <span>مدت زمان خواندن : {article.readingTime} دقیقه</span>
          </div>

          <img src={article.imageUrl} alt="اتریوم" />

          <p>
           {article.content}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default ArticlePage;
