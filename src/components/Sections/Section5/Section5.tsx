import SideImageSlider from "@/components/Carousel/SideImageSlider";
import "./Section5.scss";
import { slideImages } from "@/data/slideImages";

const Section5 = () => {
  return (
    <section className="section5">
      <div className="text_area">
        <h3 className="subtitle">
          예술 교육에 진심인
          <br />
          금성의 이야기
        </h3>
        <p className="desc">
          금성 아트허브에서 600 점이 넘는 <br className="only_m" />
          작품 감상은 물론
          <br className="only_pc" />
          다양한 수업 자료까지
          <br className="only_m" /> 지금 바로 만나 보세요!
        </p>
        <div className="img_wrap">
          <img src="/images/sec05-phones.png" className="only_pc" />
          <img src="/images/m-sec05-phones.png" className="only_m" />
        </div>

        <a href="#!" className="link_area">
          <img src="/images/arthub_symbol.png" className="arthub_symbol" />
          금성 아트허브
        </a>
      </div>

      <div className="slider_container">
        {/* 왼쪽 슬라이더 */}
        <SideImageSlider
          className="section5_slider section5_slider_left_up"
          speed={0.3}
          images={slideImages.line01}
        />
        <SideImageSlider
          className="section5_slider section5_slider_left_down"
          speed={-0.3}
          images={slideImages.line02}
        />
        {/* 오른쪽 슬라이더 */}
        <SideImageSlider
          className="section5_slider section5_slider_right_up"
          speed={0.3}
          images={slideImages.line03}
        />
        <SideImageSlider
          className="section5_slider section5_slider_right_down"
          speed={-0.3}
          images={slideImages.line04}
        />
        {/*모바일*/}
        <SideImageSlider
          className="section5_slider section5_slider_middle_up only_m"
          speed={0.3}
          images={slideImages.line01}
        />
      </div>
    </section>
  );
};

export default Section5;
