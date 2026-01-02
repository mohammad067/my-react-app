import styled from "./navbar.module.css"
import { Link } from "react-router-dom"

function Navbar(props) {
    //js
    let title = "کریپتوباز"


    //html
    return (
        
        <div className={styled.headerWrapper}>
            <div className="container">

                <div className={styled.header}>
                    <h3><Link to="/">{title}</Link></h3>
                    <ul>
                        <li>
                           <Link to="/"> لیست مقالات </Link>
                            
                             </li>
                        <li>ساخت مقاله</li>
                        <li>
                            <Link to="/about">درباره ما</Link>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;