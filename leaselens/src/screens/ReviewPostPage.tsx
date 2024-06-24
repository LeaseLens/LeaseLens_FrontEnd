import React, { useState } from 'react'
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

  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName('');
    }
  };


  return (
    <>
      <Header />
      <div className='revpg_post_selec'>
        <select name="" id="">
          <option value="">----- 카테고리 -----</option>
          <option value="">냉장고</option>
          <option value="">에어컨</option>
          <option value="">세탁기</option>
          <option value="">TV</option>
          <option value="">정수기</option>
          <option value="">공기청정기</option>
          <option value="">청소기</option>
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

      <div className='revpg_foot_container'>
        <div className="revpg_foot_upload">
          <label htmlFor="file-upload" className="revpg_foot_label">
            파일 선택
          </label>
          <input id="file-upload" type="file" className="revpg_foot_file" onChange={handleFileChange} />
          
          {fileName ? <p className="file-name">선택된 파일: {fileName}</p> : <p className="description">
            여기에 인증 사진을 올려주세요
          </p>}
        </div>
        <GreenBtn greenBtn_txt='작성' width='150px' height='80px' />
      </div>
    </>
  )
}
