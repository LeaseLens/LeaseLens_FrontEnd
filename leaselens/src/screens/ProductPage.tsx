import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Banner from "../components/Banner";
import ProCard from "../components/ProCard";
import Search from "../components/Search";
import MobileSideBar from "../components/MobileSideBar";
import Footer from "../components/Footer";
import axios from "axios";
import { ProddbProps } from "../types/productstypes";

export default function ProductPage() {
  const [products, setProducts] = useState<ProddbProps[]>([]);
  const [categorySelect, setCategory] = useState<String>("");

  const Prods = (category: String) => {
    setCategory(category);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products${categorySelect}`)
      .then((response) => {
        console.log(response.data.data.products);
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [categorySelect]);

  const [bannertxt, setBannerTxt] = useState(String);

  useEffect(() => {
    const Text = categorySelect.split("=");
    setBannerTxt(Text[1]);
  }, [categorySelect]);

  console.log("banner", bannertxt);

  return (
    <>
      <Header />
      <div className="propg_main_container">
        <div className="propg_side_container">
          <Search searchOpt={"제품명을 입력해주세요."} />
          <SideBar getProds={Prods} />
          <MobileSideBar />
        </div>
        <div className="propg_sec_container">
          <Banner bannerTxt={bannertxt} />
          <div className="propg_product_container">
          {products.map((product) => {
              return <ProCard product={product} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
