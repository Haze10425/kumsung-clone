import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TopButton.scss";

interface TopButtonProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const TopButton = ({ sectionRef }: TopButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !btnRef.current) return;

    gsap.set(btnRef.current, { opacity: 0 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      onEnter: () => gsap.to(btnRef.current, { opacity: 1, duration: 0.3 }),
      onLeaveBack: () => gsap.to(btnRef.current, { opacity: 0, duration: 0.3 }),
    });
  });

  const handleScrollTop = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0, ease: "power2.out" });
  };

  return (
    <button className="btn_top" ref={btnRef} onClick={handleScrollTop}>
      <img src="/images/icons/ico-arrow-up.png" alt="최상단 이동" />
    </button>
  );
};

export default TopButton;
