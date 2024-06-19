import "../assets/scss/LJG.scss";
import proInfoImg from "../assets/images/Product/로보락 Q Revo 로봇청소기.png";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        </button>
      </section>
    </div>
  );
}
