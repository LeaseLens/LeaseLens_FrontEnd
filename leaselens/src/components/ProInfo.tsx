import "../assets/scss/LJG.scss";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ProProps } from "../types/types";
import axios from "axios";

export default function ProInfo({ product }: ProProps) {
  const prod_idx = window.location.pathname
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    axios.post(`http://localhost:8080${prod_idx}/like`);
    setLiked(!liked);
  };

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
        <button className="proInfo_proLike_btn" onClick={handleLikeClick} >
          <BsHeartFill fill={liked ? 'red' : 'transperant'} />
        </button>
      </section>
    </div>
  );
}
