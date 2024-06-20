import "../assets/scss/LJG.scss";
<<<<<<< HEAD
import { PostProps } from "../types/types";

export default function PostTable({ fontSize }: PostProps) {
=======
import type { PostTableProps } from "../types/types";

export default function PostTable({isAdmin}: PostTableProps) {
>>>>>>> b20ea1291727ad42e03872bd73302fd872612cf3
  return (
    <div className="postTable">
      <table className="postTable_table">
        <thead className="postTable_thead">
          <tr className="postTable_head_tr" style={{ fontSize }}>
            <th className="postTable_head_th">번호</th>
            <th className="postTable_head_th">작성일</th>
            <th className="postTable_head_th">제품명</th>
            <th className="postTable_head_th">제목</th>
            <th className="postTable_head_th">작성자</th>
            <th className="postTable_head_th">인증</th>
          </tr>
        </thead>
        <tbody className="postTable_tbody">
          <tr className="postTable_body_tr" style={{ fontSize }}>
            <th className="postTable_body_th">1</th>
            <th className="postTable_body_th">2024-06-17</th>
            <th className="postTable_body_th">TV</th>
            <th className="postTable_body_th">렌탈 좋네요.</th>
            <th className="postTable_body_th">아이디</th>
            <th className="postTable_body_th">
<<<<<<< HEAD
              <input type="checkbox" name="" id="" checked readOnly className="postTable_body_input" />
=======
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
>>>>>>> b20ea1291727ad42e03872bd73302fd872612cf3
            </th>
          </tr>
          <tr className="postTable_body_tr" style={{ fontSize }}>
            <th className="postTable_body_th">2</th>
            <th className="postTable_body_th">2024-06-17</th>
            <th className="postTable_body_th">TV</th>
            <th className="postTable_body_th">렌탈 안좋네요.</th>
            <th className="postTable_body_th">아이디</th>
            <th className="postTable_body_th">
<<<<<<< HEAD
              <input type="checkbox" disabled className="postTable_body_input" />
=======
              <input
                type="checkbox"
                disabled
                className="postTable_body_input"
              />
>>>>>>> b20ea1291727ad42e03872bd73302fd872612cf3
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
