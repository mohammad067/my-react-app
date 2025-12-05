import styled from "./navbar.module.css"

function Navbar() {
    //js
    let title = "کریپتوباز"


    //html
    return (
        <div className={styled.headerWrapper}>
            <div className="container">

                <div className={styled.header}>
                    <h3>{title}</h3>
                    <ul>
                        <li>لیست مقالات </li>
                        <li>ساخت مقاله</li>
                        <li>درباره ما</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;