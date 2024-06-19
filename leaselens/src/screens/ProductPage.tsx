import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Banner from '../components/Banner'
import ProCard from '../components/proCard'
import Search from '../components/Search'

export default function ProductPage() {
    return (
        <>
            <Header />
            <div className='propg_main_container'>
                <div className='propg_side_container'>
                    <Search />
                    <SideBar />
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

        </>
    )
}
