import { Link } from "react-router-dom";
import "../assets/scss/LJG.scss";
import type { PostTableProps } from "../types/types";

export default function PostTable({ fontSize, thTxt, reviewArr }: PostTableProps) {
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
            <th className="postTable_head_th">{thTxt}</th>
          </tr>
        </thead>
        <tbody className="postTable_tbody">

          { reviewArr && reviewArr.map((review) => {
            return (
              <tr className="postTable_body_tr" style={{ fontSize }}>
                <th className="postTable_body_th">{review.rev_idx}</th>
                <th className="postTable_body_th">{review.rev_createdAt?.split("T")[0]}</th>
                <th className="postTable_body_th">{review.Product?.prod_name}</th>
                <th className="postTable_body_th"><Link to={`/reviews/${review.rev_idx}`}>{review.rev_title}</Link></th>
                <th className="postTable_body_th">{review.User?.user_ID}</th>
                <th className="postTable_body_th">{review.rev_isAuth ? <input type="checkbox" checked={true} readOnly={true} className="postTable_body_input"/> : <input type="checkbox" checked={false} readOnly={true} className="postTable_body_input"/>}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
