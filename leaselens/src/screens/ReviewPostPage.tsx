import React from 'react'
import ReactQuill from "react-quill"
import { Button } from 'react-bootstrap';
import Header from '../components/Header'
import GreenBtn from '../components/GreenBtn';

export default function ReviewPostPage() {
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline"],
      ],
    },
  };

  return (
    <>
      <Header />
      <div className='revpg_post_selec'>
        <select name="" id="">
          <option value="">----- 카테고리 -----</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value="">----- 제품명 -----</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="revpg_post_content">
        <input type="text" className='revpg_post_input' placeholder='제목을 입력해주세요.' />
        <ReactQuill className='revpg_post_text' modules={modules} />
      </div>

      <div className='foot_container'>
        <div className="foot_info">
          <input type="file" name="" id="" />
        </div>
        <div className="foot_sns">
          <GreenBtn />
        </div>
      </div>
    </>
  )
}
