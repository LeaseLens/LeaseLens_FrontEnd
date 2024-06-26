import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import GreenBtn from "../components/GreenBtn";
import Header from "../components/Header";
import PostTable from "../components/PostTable";
import Search from "../components/Search";

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
            <div className="revPage_table_header">
              <div>
                <Search searchOpt={"검색할 제목을 입력하세요."} />
              </div>
              <div>
                <Link to={'/reviews'}>
                  <GreenBtn greenBtn_txt="글쓰기" />
                </Link>
              </div>
            </div>
            <PostTable fontSize="32px" thTxt="인증" thBtn={
              <input
                type="checkbox"
                name=""
                id=""
                checked
                readOnly
                className="postTable_body_input"
              />
            }
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
