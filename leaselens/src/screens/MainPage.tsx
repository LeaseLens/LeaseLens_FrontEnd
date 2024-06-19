import "../assets/scss/LJG.scss";
import "../assets/scss/hyunh.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RevCard from "../components/RevCard";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../assets/images/Product/LG 코드제로 R5 올인원타워 로봇청소기.png";
import img2 from "../assets/images/Product/LG 코드제로 R5 올인원타워 로봇청소기.png";

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="mainPage_main">
        <section className="mainPage_leftBox">
          <div className="mainPage_proInfo_box">
            <p className="mainPage_proName">
              LG 코드제로 오브제컬랙션 R9 로봇청소기
            </p>
          </div>
          <div className="mainPage_proInfo_link">
            <a href="#" className="proInfo_link">
              렌탈하러 가기 <FaArrowRight />
            </a>
          </div>
          <RevCard />
        </section>
        <section className="mainPage_rightBox">
          <div className="mainPage_imgBox_1">
            <img src={img1} alt="" />
          </div>
          <div className="mainPage_imgBox_2">
            <img src={img2} alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
