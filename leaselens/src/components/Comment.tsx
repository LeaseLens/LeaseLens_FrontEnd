import { useRef, useState } from "react";
import "../assets/scss/LJG.scss";

export default function Comment() {
  const [isOptBoxVisible, setIsOptBoxVisible] = useState(false);
  const optBoxRef = useRef(null);

  const toggleOptBox = () => {
    setIsOptBoxVisible(!isOptBoxVisible);
  };

  return (
    <div className="comment">
      <section className="comment_titleArea">
        <p className="comment_title">Comments</p>
      </section>
      <section className="comment_bodyArea">
        <div className="comment_body">
          <section className="comment_commentInfo">
            <div className="comment_userId">아이디</div>
            <div className="comment_date_opt">
              <p className="comment_date">2024-06-18</p>
              <button className="comment_opt_btn" onClick={toggleOptBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </button>
              {isOptBoxVisible && (
                <div className="comment_opt_box" ref={optBoxRef}>
                  <div className="comment_opt_edit comment_opt">
                    <p>수정</p>
                  </div>
                  <div className="comment_opt_del comment_opt">
                    <p>삭제</p>
                  </div>
                </div>
              )}
            </div>
          </section>
          <section className="comment_comment">
            <p className="comment_content">어서오시고.</p>
          </section>
        </div>
      </section>
      <section className="comment_bodyArea">
        <div className="comment_body">
          <section className="comment_commentInfo">
            <div className="comment_userId">아이디</div>
            <div className="comment_date_opt">
              <p className="comment_date">2024-06-18</p>
              <button className="comment_opt_btn" onClick={toggleOptBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </button>
              {isOptBoxVisible && (
                <div className="comment_opt_box" ref={optBoxRef}>
                  <div className="comment_opt_edit comment_opt">
                    <p>수정</p>
                  </div>
                  <div className="comment_opt_del comment_opt">
                    <p>삭제</p>
                  </div>
                </div>
              )}
            </div>
          </section>
          <section className="comment_comment">
            <p className="comment_content">어서오시고.</p>
          </section>
        </div>
      </section>
      <section className="comment_inputArea">
        <div className="comment_inputBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <input type="text" className="comment_input" />
          <button className="comment_sendBtn">작성</button>
        </div>
      </section>
    </div>
  );
}
