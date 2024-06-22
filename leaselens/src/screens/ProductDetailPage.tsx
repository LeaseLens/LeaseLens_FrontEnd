import React from "react";
import Header from "../components/Header";
import ProInfo from "../components/ProInfo";
import RevCard from "../components/RevCard";
import { BsArrowRightCircle } from "react-icons/bs";
import Footer from "../components/Footer";

export default function ProductDetailPage() {
  return (
    <>
      <Header />
      <main className="prodetpg_main">
        <div className="prodetpg_info_container">
          <ProInfo />
        </div>
        <div className="prodetpg_rev_container">
          <p className="prodetpg_rev_txt">제품 리뷰 모아보기</p>
          <div className="prodetpg_rev_cont">
            <RevCard />
            <RevCard />
            <BsArrowRightCircle style={{ width: "3em", height: "3em" }} />
          </div>
        </div>
        <div className="prodetpg_mobileInfo_box">
            <p className="proInfo_proName">로보락 Q Revo 로봇청소기</p>
            <p className="proInfo_proLease_price">월 렌트 비용 : 100,000,000원</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
