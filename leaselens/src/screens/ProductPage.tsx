import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Banner from "../components/Banner";
import ProCard from "../components/ProCard";
import Search from "../components/Search";
import MobileSideBar from "../components/MobileSideBar";
import Footer from "../components/Footer";
import axios from "axios";
import { ProProps } from "../types/types";

export default function ProductPage() {
  const [allProducts, setAllProducts] = useState<ProProps[]>([]);
  const [products, setProducts] = useState<ProProps[]>([]);
  const [categorySelect, setCategory] = useState<String>("");
  const [bannertxt, setBannerTxt] = useState<string>("");

  const Prods = (category: String) => {
    setCategory(category);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products${categorySelect}`)
      .then((response) => {
        console.log(response.data.data.products);
        setAllProducts(response.data.data.products);
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.error("제품을 가져오는 중 오류가 발생했습니다:", error);
      });
  }, [categorySelect]);

  const Search1 = (val: string) => {
    if (val === "") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((e) => e?.prod_name?.includes(val)));
    }
  }
  
  useEffect(() => {
    const Text = categorySelect.split("=");
    setBannerTxt(Text[1] || "");
  }, [categorySelect]);
  
  return (
    <>
      <Header />
      <div className="propg_main_container">
        <div className="propg_side_container">
          <Search searchOpt={"제품명을 입력해주세요."} search={Search1} />
          <SideBar getProds={Prods} />
          <MobileSideBar getProds={Prods} />
        </div>
        <div className="propg_sec_container">
          <Banner bannerTxt={bannertxt} />
          <div className="propg_product_container">
            {products.map((product) => {
              return <ProCard key={product.prod_idx} product={product} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
