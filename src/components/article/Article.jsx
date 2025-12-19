import styled from "./article.module.css"
function Article(props){
return(
    <div className={styled.articleWrapper}> 
    <a href="https://cryptobaz.io" target="_blank">
    <img src={props.article.imageUrl} alt="saman" />
    <h3>{props.article.title}</h3>
    <p>خواندن {props.article.readingTime} دقیقه </p>
    </a>
    </div>
)
}
export default Article;