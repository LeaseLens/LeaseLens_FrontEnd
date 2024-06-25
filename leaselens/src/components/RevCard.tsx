import { Link } from 'react-router-dom'
import { RevProps } from '../types/types'

export default function RevCard({ width, height, rev_idx, prod_img }: RevProps) {
  return (
    <div className='rev_container mainPage_RevCard' style={{ width, height }}>
      <Link to={`/reviews/${rev_idx}`}>
        <div className="rev_img">
          <img src={prod_img} alt="제품 리뷰 사진" />
        </div>
        <div className="rev_content">
          <div className="rev_star">⭐ ⭐ ⭐ ⭐ ⭐</div>
          <h3 className="rev_title">렌탈 좋네요.</h3>
          <div className="rev_text">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
        </div>
      </Link>
    </div>
  )
}
