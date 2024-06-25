import "../assets/scss/LJG.scss";
import proInfoImg from "../assets/images/Product/로보락 Q Revo 로봇청소기.png";
import { BsHeart } from "react-icons/bs";

export default function ProInfo() {
  return (
    <div className="proInfo">
      <section className="proInfo_proImg_container">
        <img src={proInfoImg} alt="" className="proInfo_proImg" />
      </section>
      <section className="proInfo_proInfo_des">
        <div>
          <p className="proInfo_proName">로보락 Q Revo 로봇청소기</p>
        </div>
        <p className="proInfo_proLease_price">월 렌트 비용 : 100,000,000원</p>
        <p className="proInfo_proDes">
          설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
        </p>
      </section>
      <section className="proInfo_proLike_btn_box">
        <button className="proInfo_proLike_btn">
          <BsHeart />
        </button>
        <div></div>
      </section>
    </div>
  );
}
