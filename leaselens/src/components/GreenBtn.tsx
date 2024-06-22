import { GreenBtnProps } from "../types/types";

export default function GreenBtn({ greenBtn_txt, width, height }: GreenBtnProps) {
  return (
    <section className="proCard_button_section greenBtn" style={{ width, height }}>
      <button className='proCard_button greenBtn_button'>{greenBtn_txt}</button>
    </section>
  )
}
