import "../assets/scss/LJG.scss";
import type { PostTableProps } from "../types/types";

export default function PostTable({isAdmin}: PostTableProps) {
  return (
    <div className="postTable">
      <table className="postTable_table">
        <thead className="postTable_thead">
          <tr className="postTable_head_tr">
            <th className="postTable_head_th">번호</th>
            <th className="postTable_head_th">작성일</th>
            <th className="postTable_head_th">제품명</th>
            <th className="postTable_head_th">제목</th>
            <th className="postTable_head_th">작성자</th>
            <th className="postTable_head_th">인증</th>
          </tr>
        </thead>
        <tbody className="postTable_tbody">
          <tr className="postTable_body_tr">
            <th className="postTable_body_th">1</th>
            <th className="postTable_body_th">2024-06-17</th>
            <th className="postTable_body_th">TV</th>
            <th className="postTable_body_th">렌탈 좋네요.</th>
            <th className="postTable_body_th">아이디</th>
            <th className="postTable_body_th">
              {isAdmin ? (
                <section className="proCard_button_section postAuthBtn_box">
                  <button className="proCard_button postAuthBtn">인증</button>
                </section>
              ) : (
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked
                  readOnly
                  className="postTable_body_input"
                />
              )}
            </th>
          </tr>
          <tr className="postTable_body_tr">
            <th className="postTable_body_th">2</th>
            <th className="postTable_body_th">2024-06-17</th>
            <th className="postTable_body_th">TV</th>
            <th className="postTable_body_th">렌탈 안좋네요.</th>
            <th className="postTable_body_th">아이디</th>
            <th className="postTable_body_th">
              <input
                type="checkbox"
                disabled
                className="postTable_body_input"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
