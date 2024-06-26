import "../assets/scss/LJG.scss";
import proInfoImg from "../assets/images/Product/로보락 Q Revo 로봇청소기.png";
import { BsHeart } from "react-icons/bs";
import { ProProps } from "../types/types";

export default function ProInfo({ product }:ProProps) {
  return (
    <div className="proInfo">
      <section className="proInfo_proImg_container">
        <img src={product.prod_img} alt="" className="proInfo_proImg" />
      </section>
      <section className="proInfo_proInfo_des">
        <div>
          <p className="proInfo_proName">{product.prod_name}</p>
        </div>
        <p className="proInfo_proLease_price">월 렌트 비용 : {product.prod_price?.toString()}원</p>
        <p className="proInfo_proDes">
          {product.prod_text}
        </p>
      </section>
      <section className="proInfo_proLike_btn_box">
        <div className="proInfo_proLike_num">like : {product.prod_likes?.toString()}</div>
        <button className="proInfo_proLike_btn">
          <BsHeart />
        </button>
      </section>
    </div>
  );
}
