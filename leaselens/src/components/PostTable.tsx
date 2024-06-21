import "../assets/scss/LJG.scss";
import type { PostTableProps } from "../types/types";

export default function PostTable({ fontSize, isAdmin, thTxt, thBtn }: PostTableProps) {
  return (
    <div className="postTable">
      <table className="postTable_table">
        <thead className="postTable_thead">
          <tr className="postTable_head_tr" style={{fontSize}}>
            <th className="postTable_head_th">번호</th>
            <th className="postTable_head_th">작성일</th>
            <th className="postTable_head_th">제품명</th>
            <th className="postTable_head_th">제목</th>
            <th className="postTable_head_th">작성자</th>
            <th className="postTable_head_th">{thTxt}</th>
          </tr>
        </thead>
        <tbody className="postTable_tbody">
          <tr className="postTable_body_tr" style={{fontSize}}>
            <th className="postTable_body_th">1</th>
            <th className="postTable_body_th">2024-06-17</th>
            <th className="postTable_body_th">TV</th>
            <th className="postTable_body_th">렌탈 좋네요.</th>
            <th className="postTable_body_th">아이디</th>
            <th className="postTable_body_th">
              {thBtn}
            </th>
          </tr>
          <tr className="postTable_body_tr" style={{fontSize}}>
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
