import Banner from "../components/Banner";
import Footer from "../components/Footer";
import GreenBtn from "../components/GreenBtn";
import Header from "../components/Header";
import PostTable from "../components/PostTable";
import Search from "../components/Search";

// 임시 어드민 / 일반 사용자 구분
const adminKey = true;

export default function ReviewListPage() {
  return (
    <>
      <Header />
      <main className="revPage">
        <section className="revPage_main">
          <div className="revPage_banner">
            <Banner bannerTxt={"리뷰 커뮤니티"} />
          </div>
          <div className="revPage_table">
            {adminKey ? '' : <div className="revPage_table_header">
              <div>
                <Search searchOpt={"검색할 제목을 입력하세요."}/>
              </div>
              <div>
                <GreenBtn greenBtn_txt="글쓰기" />
              </div>
            </div>}
            <PostTable isAdmin = {adminKey} fontSize="32px"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
