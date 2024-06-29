import { useEffect, useState } from "react";
import "../assets/scss/LJG.scss";
import { CommentdbProps } from "../types/commenttypes";
import axios from "axios";

export default function Comment({isAdmin, rev_authImg}: CommentdbProps) {
  const [isOptBoxVisible, setIsOptBoxVisible] = useState<number | null>(null);

  const toggleOptBox = (commentIdx: number) => {
    setIsOptBoxVisible(prevState => (prevState === commentIdx ? null : commentIdx));
  };

  const revIndex = window.location.pathname;
  const [RevComments, setRevComments] = useState<CommentdbProps[]>([]);

  const showComments = async () => {
    try {
      const response = await axios.get(`http://localhost:8080${revIndex}`);
      setRevComments(response.data.data.review.Comments);
      console.log(response.data.data.review.Comments);
    } catch (err) {
      console.log(err);
    }
  };

  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080${revIndex}/comments`, {
        com_text: commentText,
      });
      setCommentText("");
      showComments()
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showComments();
  }, []);

  const [editingCommentIdx, setEditingCommentIdx] = useState<number | null>(null);
  const [editedCommentText, setEditedCommentText] = useState("");

  const handleEditedCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCommentText(e.target.value);
  };

  const handleEditComment = (commentIdx: number, currentText: string) => {
    setEditingCommentIdx(commentIdx);
    setEditedCommentText(currentText);
  };

  const handleSaveEditedComment = async (com_idx: number) => {
    try {
      await axios.patch(`http://localhost:8080${revIndex}/comments/${com_idx}`, {
        com_text: editedCommentText,
      });
      setEditingCommentIdx(null);
      showComments();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (editingCommentIdx !== null) {
      setIsOptBoxVisible(null);
    }
  }, [editingCommentIdx]);

  function handleReviewAuth() {
    const rev_idx = revIndex.split("/")[2];
    axios
      .post(`http://localhost:8080/admin/${rev_idx}/auth`)
      .then((response) => {
        alert(response.data.message);
      })
  }
  return (
    <div className="comment">
      <section className="comment_titleArea">
        {isAdmin ? ('') : (<p className="comment_title">Comments</p>)}
      </section>
      <div className="comment_scrollArea">
      {isAdmin ? (<img src={rev_authImg} className="rev_authImg"></img>) : (
        RevComments.map((comment) => (
          <section className="comment_bodyArea">
            <div className="comment_body">
              <section className="comment_commentInfo">
                <div className="comment_userId">{comment.User?.user_ID}</div>
                <div className="comment_date_opt">
                  <p className="comment_date">{comment.createdAt?.split('T')[0]}</p>
                  <button className="comment_opt_btn" onClick={() => toggleOptBox(comment.com_idx!)}>
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
                  {isOptBoxVisible === comment.com_idx! && (
                    <div className="comment_opt_box">
                      <div className="comment_opt_edit comment_opt">
                        <p onClick={() => handleEditComment(comment.com_idx!, comment.com_text!)}>수정</p>
                      </div>
                      <div className="comment_opt_del comment_opt">
                        <p>삭제</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
              <section className="comment_comment">
              {editingCommentIdx === comment.com_idx ? (
                <>
                  <input
                    type="text"
                    value={editedCommentText}
                    onChange={handleEditedCommentChange}
                  />
                  <button
                  style={{
                    backgroundColor: 'black',
                    borderRadius: '5px',
                    color: 'white'
                  }}
                  onClick={() => handleSaveEditedComment(comment.com_idx!)}>수정</button>
                  </>
                ) : (
                  <p className="comment_content">{comment.com_text}</p>
                )}
              </section>
            </div>
          </section>
        ))
      )}
      </div>
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
          <input type="text" className="comment_input"
            value={commentText}
            onChange={handleCommentChange}
          />
          {isAdmin ? (
            <button className="comment_sendBtn" onClick={handleReviewAuth}>인증</button>
          ) : (
            <button className="comment_sendBtn"
              onClick={handleCommentSubmit}>작성</button>
          )}
        </div>
      </section>
    </div>
  );
}
