import Header from "../components/Header";
import ProInfo from "../components/ProInfo";
import RevCard from "../components/RevCard";
import { BsArrowRightCircle } from "react-icons/bs";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { RevdbProps } from "../types/reviewtypes";

export default function ProductDetailPage() {
  const productAPI = window.location.pathname;
  const [productInfo, setProduct] = useState(Object);
  const [review, setReview] = useState<RevdbProps[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080${productAPI}`)
      .then((response) => {
        console.log(response.data.data);
        setProduct(response.data.data.productDetail);
        setReview(response.data.data.reviews);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log(productInfo);
  console.log(review);

  return (
    <>
      <Header />
      <main className="prodetpg_main">
        <div className="prodetpg_info_container">
          <ProInfo product={productInfo}/>
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
            <p className="proInfo_proName">{productInfo.prod_name}</p>
            <p className="proInfo_proLease_price">월 렌트 비용 : {productInfo.prod_price}원</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
