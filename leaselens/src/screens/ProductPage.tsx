import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Banner from '../components/Banner'
import ProCard from '../components/ProCard'
import Search from '../components/Search'
import MobileSideBar from '../components/MobileSideBar'
import Footer from '../components/Footer'

export default function ProductPage() {
    return (
        <>
            <Header />
            <div className='propg_main_container'>
                <div className='propg_side_container'>
                    <Search searchOpt={"제품명을 입력해주세요."}/>
                    <SideBar />
                    <MobileSideBar />
                </div>
                <div className='propg_sec_container'>
                    <Banner bannerTxt={'전체 상품'} />
                    <div className='propg_product_container'>
                        <ProCard />
                        <ProCard />
                        <ProCard />
                    </div>
                    <div className='propg_product_container'>
                        <ProCard />
                        <ProCard />
                        <ProCard />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
