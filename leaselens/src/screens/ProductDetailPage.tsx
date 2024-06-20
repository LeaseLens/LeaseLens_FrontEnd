import React from 'react'
import Header from '../components/Header'
import ProInfo from '../components/ProInfo'
import RevCard from '../components/RevCard'
import { BsArrowRightCircle } from "react-icons/bs";

export default function ProductDetailPage() {
    return (
        <>
            <Header />
            <div className='prodetpg_info_container'>
                <ProInfo />
            </div>
            <div className='prodetpg_rev_container'>
                <p className='prodetpg_rev_txt'>제품 리뷰 모아보기</p>
                <div className='prodetpg_rev_cont'>
                    <RevCard />
                    <RevCard />
                    <BsArrowRightCircle style={{ width: '3em', height: '3em' }} />
                </div>
            </div>
        </>
    )
}
