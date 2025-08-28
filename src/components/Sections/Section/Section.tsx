import gsap from "gsap";
import Logo from "@/components/Logo/Logo";
import { mainImages } from "@/data/tileImageData";
import "./Section.scss";

interface SectionProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

const Section = ({ targetRef }: SectionProps) => {
  const handlePageDown = () => {
    if (targetRef.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: targetRef.current,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section className="section">
      <div className="card_wrap">
        <ul className="card_list">
          <li className="card main">
            <div className="logo_wrap">
              <Logo width="100" height="14" color="#000" />
            </div>
            <h3>
              세상을 잇는
              <br />
              <strong>
                교과서,
                <br />
                금성출판사가
              </strong>
              <br />
              만듭니다
            </h3>
            <div className="btn_down_wrap">
              <button className="btn_down" onClick={handlePageDown}>
                <span className="blind">다음 섹션으로 이동</span>
              </button>
            </div>
          </li>
          {mainImages.map((imageSrc, index) => {
            return (
              <li className="card" key={index}>
                <img src={imageSrc} alt={`메인 화면 이미지 ${index}`} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Section;
