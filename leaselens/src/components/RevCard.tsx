import { Link } from 'react-router-dom'
import { RevProps } from '../types/types'

export default function RevCard({ width, height, rev_idx, rev_img, review }: RevProps) {
  const rev_rat = review.rev_rating;
  const innerText = review?.rev_text !== undefined ? review?.rev_text : "본문내용이 없습니다.";

  const rating = () => {
    if (rev_rat !== undefined) {
      return (
        <>
          {[...Array(rev_rat)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <div className='rev_container mainPage_RevCard' style={{ width, height }}>
      <Link to={`/reviews/${review.rev_idx}`}>
        <div className="rev_img">
          <img src={rev_img} alt="제품 리뷰 사진" />
        </div>
        <div className="rev_content">
          <div className="rev_star">{rating()}</div>
          <h3 className="rev_title">{review.rev_title}</h3>
          <div className="rev_text" dangerouslySetInnerHTML={{__html: innerText}}></div>
        </div>
      </Link>
    </div>
  )
}
