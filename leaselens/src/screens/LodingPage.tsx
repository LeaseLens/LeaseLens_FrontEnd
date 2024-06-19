import '../assets/scss/LJG.scss'
import logoImg from '../assets/images/Logo/leaselens_imgsm_logo.png'
import logoText from '../assets/images/Logo/leaselens_text_logo.png'

export default function LodingPage() {
  return (
    <main className='LodingPage_main'>
      <section className="LodingPage_logo_box">
        <div className="LodingPage_logoImg_box">
          <img src={logoImg} alt="" className="LodingPage_logoImg" />
        </div>
        <div className="LodingPage_logoText_box">
          <img src={logoText} alt="" className="LodingPage_logoText" />
        </div>
      </section>
    </main>
  )
}
