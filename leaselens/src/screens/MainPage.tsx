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
          <div className="mainPage_proInfo_proDes">
            <p className="mainPage_proDes">
              설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
            </p>
          </div>
          <RevCard />
        </section>
        <section className="mainPage_rightBox">
          <div className="mainPage_imgBox">
            <img src={img1} alt="" className="mainPage_img mainPage_img1"/>
          </div>
          <div className="mainPage_imgBox">
            <img src={img2} alt="" className="mainPage_img mainPage_img2"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}