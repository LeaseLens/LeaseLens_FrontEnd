import { BsHeartFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import Header from '../components/Header'
import Profile from '../components/Profile'
import PostTable from '../components/PostTable';
import Footer from '../components/Footer';
import ProCard from "../components/ProCard";

export default function MyPage() {
    return (
        <>
            <Header />
            <div className='mypg_content_container'>
                <Profile />
                <div className='mypg_like_container'>
                    <div className="mypg_like_text">
                        <BsHeartFill style={{ color: 'red', width: '2em', height: '2em', paddingTop: '5px' }} />
                        <p>찜 목록</p>
                    </div>
                    <div className="mypg_like_content">
                        <div className="mypg_like_item">
                            <ProCard width='45%' height='100%' />
                            <ProCard width='45%' height='100%' />
                        </div>
                    </div>
                </div>

                <div className='mypg_like_container'>
                    <PostTable fontSize='20px' />
                </div>
                <Button variant="outline-danger" className='mypg_userDel'>회원 탈퇴</Button>
            </div>
            <Footer />
        </>
    )
}
