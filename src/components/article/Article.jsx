import styled from "./article.module.css"
function Article(props){
return(
    <div className={styled.articleWrapper}> 
    <img src={props.article.imageUrl} alt="news" />
    <h3>{props.article.title}</h3>
    <p>خواندن {props.article.readingTime} دقیقه </p>
    </div>
)
}
export default Article;