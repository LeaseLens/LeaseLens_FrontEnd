import Footer from "../components/Footer";
import Header from "../components/Header";
import RevCard from "../components/RevCard";
import { FaArrowRight } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import axios from "axios";
import { ProddbProps } from "../types/productstypes";

export default function MainPage() {

  const [products, setProducts] = useState<ProddbProps[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/main')
      .then(response => {
        console.log(response.data.data.products)
        setProducts(response.data.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <main className="mainPage_main">
            <div className="mainPage_imgBox_min">
              <img src={products[0]?.prod_img} alt="" className="mainPage_img_min mainPage_img1_min" />
            </div>
            <section className="mainPage_leftBox">
              <div className="mainPage_proInfo_box">
                <p className="mainPage_proName">
                  {products[0]?.prod_name}
                </p>
              </div>
              <div className="mainPage_proInfo_link">
                <a href={`/products/${products[0]?.prod_idx}`} className="proInfo_link">
                  렌탈하러 가기 <FaArrowRight />
                </a>
              </div>
              <div className="mainPage_proInfo_proDes">
                <p className="mainPage_proDes">
                  {products[0]?.prod_text}
                </p>
              </div>
              {/* <RevCard rev_img={products[0]?.prod_img}/> */}
            </section>
            <section className="mainPage_rightBox">
              <div className="mainPage_imgBox">
                <img src={products[0]?.prod_img} alt="" className="mainPage_img mainPage_img1" />
              </div>
              <div className="mainPage_imgBox">
                <img src={products[0]?.prod_img} alt="" className="mainPage_img mainPage_img2" />
              </div>
            </section>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main className="mainPage_main">
            <div className="mainPage_imgBox_min">
              <img src={products[1]?.prod_img} alt="" className="mainPage_img_min mainPage_img1_min" />
            </div>
            <section className="mainPage_leftBox">
              <div className="mainPage_proInfo_box">
                <p className="mainPage_proName">
                  {products[1]?.prod_name}
                </p>
              </div>
              <div className="mainPage_proInfo_link">
                <a href={`/products/${products[1]?.prod_idx}`} className="proInfo_link">
                  렌탈하러 가기 <FaArrowRight />
                </a>
              </div>
              <div className="mainPage_proInfo_proDes">
                <p className="mainPage_proDes">
                  {products[1]?.prod_text}
                </p>
              </div>
              {/* <RevCard rev_img={products[1]?.prod_img}/> */}
            </section>
            <section className="mainPage_rightBox">
              <div className="mainPage_imgBox">
                <img src={products[1]?.prod_img} alt="" className="mainPage_img mainPage_img1" />
              </div>
              <div className="mainPage_imgBox">
                <img src={products[1]?.prod_img} alt="" className="mainPage_img mainPage_img2" />
              </div>
            </section>
          </main>
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  );
}