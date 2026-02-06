import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./aboutUs.module.css";
import image from "../../assets/images/saman-logo.png";
function AboutUs() {
  return (
    <>
      <Navbar title="کریپتوباز" />
      <div className={styled.aboutPage}>
        <div className="container">
          <h2>درباره ما</h2>
          <p>
            تمام متن ها ساختگی است . تمام متن ها ساختگی است . تمام متن ها ساختگی
            است . تمام متن ها ساختگی است . تمام متن ها ساختگی است
          </p>
          <h3>!اوضاع روبه راهه؟</h3>
          <img src={image} alt="bank-saman" />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutUs;
