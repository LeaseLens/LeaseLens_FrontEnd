import Banner from "../components/Banner";
import Footer from "../components/Footer";
import GreenBtn from "../components/GreenBtn";
import Header from "../components/Header";
import PostTable from "../components/PostTable";
import Search from "../components/Search";
import SideBar from "../components/SideBar";

export default function ReviewPage() {
  return (
    <>
      <Header />
      <main className="revPage">
        <div className="revPage_sideBar">
          <div className="propg_side_container">
            <Search searchOpt={"제품명을 입력해주세요."}/>
            <SideBar />
          </div>
        </div>
        <section className="revPage_main">
          <div className="revPage_banner">
            <Banner bannerTxt={"리뷰 커뮤니티"} />
          </div>
          <div className="revPage_table">
            <div className="revPage_table_header">
              <div>
                <Search searchOpt={"검색할 제목을 입력하세요."}/>
              </div>
              <div>
                <GreenBtn />
              </div>
            </div>
            <PostTable />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
