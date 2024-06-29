import { BsHeartFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import Header from '../components/Header'
import Profile from '../components/Profile'
import PostTable from '../components/PostTable';
import Footer from '../components/Footer';
import ProCard from "../components/ProCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProProps } from "../types/types";
import { RevdbProps } from "../types/reviewtypes";
import { UserdbProps } from "../types/logintypes";

export default function MyPage() {
    const [favProds, setFavProd] = useState<ProProps[]>([]);
    const [userRev, setUserRev] = useState<RevdbProps[]>([]);
    const [userInfo, setUserInfo] = useState<UserdbProps>(Object);
    const [alertShown, setAlertShown] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/mypage`)
            .then((response) => {
                setFavProd(response.data.data.favoriteProducts);
                setUserRev(response.data.data.userReviews);
                setUserInfo(response.data.data.userInfo);
            })
            .catch((error) => {
                console.error("Error fetching userInfo:", error);
                if (!alertShown) {
                    setAlertShown(true);
                    alert("로그인 후 이용해주세요.");
                    window.location.pathname = "/main";
                }
            });
    }, [userRev]);

    return (
        <>
            <Header />
            <div className='mypg_content_container'>
                <Profile user_name={userInfo.user_name} user_ID={userInfo.user_ID} user_points={userInfo.user_points} />
                <div className='mypg_like_container'>
                    <div className="mypg_like_text">
                        <BsHeartFill style={{ color: 'red', width: '2em', height: '2em', paddingTop: '5px' }} className="likeBtn" />
                        <p>찜 목록</p>
                    </div>
                    <div className="mypg_like_content">
                        <div className="mypg_like_item">
                            {favProds.map((product) => (
                                <ProCard key={product.prod_idx} width="90%" height="100%" product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mypg_like_container'>
                    <PostTable fontSize='20px' thTxt="삭제"
                        reviewArr={userRev}/>
                </div>
                <Button variant="outline-danger" className='mypg_userDel'>회원 탈퇴</Button>
            </div>
            <Footer />
        </>
    )
}
