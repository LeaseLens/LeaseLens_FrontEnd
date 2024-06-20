import product1 from '../assets/images/Product/LG 코드제로 R5 올인원타워 로봇청소기.png'

export default function RevCard() {
  return (
    <div className='rev_container mainPage_RevCard'>
        <div className="rev_img">
          <img src={product1} alt="제품 리뷰 사진" />
        </div>
        <div className="rev_content">
          <div className="rev_star">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <h3 className="rev_title">렌탈 좋네요.</h3>
          <div className="rev_text">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
        </div>
    </div>
  )
}
