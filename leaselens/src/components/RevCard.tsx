import { Link } from 'react-router-dom'
import { RevProps } from '../types/types'

export default function RevCard({ width, height, rev_idx, rev_img, review }: RevProps) {
  const rev_rat = review.rev_rating;
  const rating = () => {
    if(rev_rat !== undefined) {
      for(let i=0;i<rev_rat;i++) {
        return "⭐";
      }
    }
  }

  return (
    <div className='rev_container mainPage_RevCard' style={{ width, height }}>
      <Link to={`/reviews/${rev_idx}`}>
        <div className="rev_img">
          <img src={rev_img} alt="제품 리뷰 사진" />
        </div>
        <div className="rev_content">
          <div className="rev_star">{rating()}</div>
          <h3 className="rev_title">{review?.rev_title}</h3>
          <div className="rev_text">{review?.rev_text?.toString()}</div>
        </div>
      </Link>
    </div>
  )
}
