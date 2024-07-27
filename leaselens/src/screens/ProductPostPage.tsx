import React, { useMemo, useRef, useState } from 'react'
import ReactQuill, { Quill } from "react-quill"
import { ImageResize } from 'quill-image-resize-module-ts';
import Header from '../components/Header'
import GreenBtn from '../components/GreenBtn';
import axios from 'axios';

const BACKHOST = process.env.REACT_APP_BACK_HOST;

Quill.register("modules/ImageResize", ImageResize);

export default function ReviewPostPage() {
  const quillRef = useRef<ReactQuill | null>(null);

  const ImageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const selectedFiles = input.files;
      if (!selectedFiles) return;
      let filesArray = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...filesArray]);
      const formData = new FormData();
      filesArray.forEach((file, i) => {
        formData.append('rev_img', file);
      });
      let quillObj = quillRef.current?.getEditor();
      const range = quillObj?.getSelection();
      if (!range) return;
      try {
        const res = await axios.post(`${BACKHOST}/reviews/img`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        let imgUrl = res.data.urls;
        if (Array.isArray(imgUrl)) {
          imgUrl.forEach((url) => {
            quillObj?.insertEmbed(range.index, 'image', url);
          });
        } else {
          quillObj?.insertEmbed(range.index, 'image', imgUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
        handlers: {
          image: ImageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    };
  }, []);
  const [files, setFiles] = useState<File[]>([]);

  const [title, setTitle] = useState<String>('');
  const [content, setContent] = useState<String>('');
  const [categorySelect, setCategorySelect] = useState<String>("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorySelect(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (value: string) => {
    const div = document.createElement('div');
    div.innerHTML = value;
    const images = div.getElementsByTagName('img');

    while (images.length > 0) {
      images[0].parentNode?.removeChild(images[0]);
    }
    setContent(div.innerHTML);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('prod_title', title as string);
    formData.append('prod_text', content as string);

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append('prod_img', files[i]);
      }
    }
  };

  return (
    <>
      <Header />
      <div className='revpg_post_selec'>
        <select name="" id="" onChange={handleCategoryChange}>
          <option value="">----- 카테고리 -----</option>
          <option value="냉장고">냉장고</option>
          <option value="에어컨">에어컨</option>
          <option value="세탁기">세탁기</option>
          <option value="TV">TV</option>
          <option value="정수기">정수기</option>
          <option value="공기청정기">공기청정기</option>
          <option value="청소기">청소기</option>
        </select>
      </div>
      <div className="revpg_post_content">
        <input type="text" className='revpg_post_input' placeholder='제품명을 입력해주세요.'
          onChange={handleTitleChange} />
        <ReactQuill
          placeholder='제품 설명'
          ref={quillRef}
          className='revpg_post_text'
          modules={modules}
          onChange={handleContentChange} />
      </div>

      <div className='revpg_foot_container'>
        <div className="revpg_foot_upload">
        </div>
        <GreenBtn greenBtn_txt='제품 등록' width='150px' height='80px' onClick={handleSubmit} />
      </div>
    </>
  )
}
