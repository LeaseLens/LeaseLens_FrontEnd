import React from 'react'

export default function SideBar() {
  return (
    <div className='side_container'>
        <div className='side_all'>전체 상품</div>
        <div className='side_hr'></div>
        <ul className='side_category'>
          <li className='side_item'>냉장고</li>
          <li className='side_item'>에어컨</li>
          <li className='side_item'>세탁기</li>
          <li className='side_item'>TV</li>
          <li className='side_item'>정수기</li>
          <li className='side_item'>공기청정기</li>
          <li className='side_item'>청소기</li>
        </ul>
    </div>
  )
}
