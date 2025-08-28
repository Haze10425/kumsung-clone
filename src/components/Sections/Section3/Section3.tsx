import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Section3.scss";


const Section3 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const scrollTriggerConfig = {
      trigger: sectionRef.current,
      start: "top center",
      toggleActions: "restart none restart none",
    };

    const images = sectionRef.current.querySelectorAll(".textbook_image_pc");
    const titles = sectionRef.current.querySelectorAll(".subtitle_container");

    gsap.fromTo(
      images,
      { scale: 0.2 },
      {
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: scrollTriggerConfig,
      }
    );
    gsap.fromTo(
      titles,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: scrollTriggerConfig,
      }
    );
  }, []);

  const [showBubble, setShowBubble] = useState(false);
  const handleBubble = () => {
    setShowBubble(!showBubble);
  };

  return (
    <section className="section3" ref={sectionRef}>
      <div className="textbook_image_pc"></div>
      <div className="subtitle_container">
        <h3 className="subtitle">
          교과서는 역시 <br />
          금성교과서
        </h3>
        <p>
          제3차 교육과정부터 지금까지 멈추지 않고, <br />
          대한민국의 교육과 함께해 왔습니다.
        </p>
        <div className="btn_wrap">
          <button className="btn_rounded icon_dislike">
            <span className="blind">dislike</span>
          </button>
          <button className="btn_rounded icon_like" onClick={handleBubble}>
            <div className={`bubble_wrap ${showBubble ? "active" : ""}`}>
              <span className="text">선생님 최고예요!</span>
              <img src="./images/bubble-green.png" alt="선생님 최고예요!"></img>
            </div>
            <span className="blind">like</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
