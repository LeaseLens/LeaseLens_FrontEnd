import { Link } from "react-router-dom";
import "../assets/scss/LJG.scss";
import type { PostTableProps } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { RevdbProps } from "../types/reviewtypes";

export default function PostTable({ fontSize, isAdmin, thTxt, thBtn, rev_idx, reviews }: PostTableProps) {

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
          {reviews.map((review) => {
            return (
              <tr className="postTable_body_tr" style={{ fontSize }}>
                <th className="postTable_body_th">{review.rev_idx}</th>
                <th className="postTable_body_th">{review.rev_createdAt}</th>
                <th className="postTable_body_th">{review.Product?.prod_name}</th>
                <th className="postTable_body_th"><Link to={`/reviews/${rev_idx}`}>{review.rev_title}</Link></th>
                <th className="postTable_body_th">{review.User?.user_ID}</th>
                <th className="postTable_body_th">
                  {thBtn}
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
