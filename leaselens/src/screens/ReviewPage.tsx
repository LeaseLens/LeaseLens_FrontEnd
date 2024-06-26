import React from 'react'
import Header from '../components/Header'
import RevCard from '../components/RevCard'
import Comment from '../components/Comment'
import Footer from '../components/Footer'

export default function ReviewPage() {
  return (
    <>
      <Header />
      <div className='reviewPage_Info'>
        <span className='reviewPage_proname'>LG 코드제로 오브제컬렉션 R9 로봇청소기</span>
        <span className='reviewPage_Id'>아이디</span>
      </div>
      <main className="reviewPage_main">
        <div className="reviewPage_revCard">
          <RevCard width="90%" height="100%" />
        </div>
        <div className="reviewPage_commentBox">
          <Comment />
        </div>
      </main>
      <Footer />
    </>
  )
}
