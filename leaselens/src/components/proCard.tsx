import '../assets/scss/LJG.scss'
import proImage from "../assets/images/Product/LG OLED 스마트 TV 55인치.png";

export default function ProCard() {
  return (
    <div className='proCard'>
    <section className="proCard_img_container">
      <img src={proImage} alt="" className="proCard_img" />
    </section>
    <section className="proCard_name_section">
      <p className='proCard_pro_name'>LG OLED 스마트 TV 55인치</p>
    </section>
    <section className="proCard_button_section">
      <button className='proCard_button'>제품 보기</button>
    </section>
  </div>
  )
}
