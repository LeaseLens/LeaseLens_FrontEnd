import React from 'react'
import Header from '../components/Header'
import RevCard from '../components/RevCard'
import Comment from '../components/Comment'
import Footer from '../components/Footer'

export default function ReviewPage() {
  return (
    <>
      <Header />
      <main className="reviewPage_main">
        <div className="reviewPage_revCard">
          <RevCard width="90%" height="100%"/>
        </div>
        <div className="reviewPage_commentBox">
          <Comment />
        </div>
      </main>
      <Footer />
    </>
  )
}
