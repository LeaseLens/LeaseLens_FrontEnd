import Header from '../components/Header'
import RevCard from '../components/RevCard'
import Comment from '../components/Comment'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RevdbProps } from '../types/reviewtypes';

export default function ReviewPage() {
  const revIndex = window.location.pathname;
  const [review, setReview] = useState<RevdbProps>(Object);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get(`http://localhost:8080${revIndex}`);
        setReview(response.data.data.review);
      } catch (err) {
        console.log(err)
      }
    }
    
    fetchReviews();
  }, []);
  
  console.log(review);
  
  return (
    <>
      <Header />
      <div className='reviewPage_Info'>
        <span className='reviewPage_proname'>{review.Product?.prod_name}</span>
        <span className='reviewPage_Id'>{review.User?.user_ID}</span>
      </div>
      <main className="reviewPage_main">
        <div className="reviewPage_revCard">
          <RevCard width="90%" height="100%" review={review}/>
        </div>
        <div className="reviewPage_commentBox">
          <Comment />
        </div>
      </main>
      <Footer />
    </>
  )
}
