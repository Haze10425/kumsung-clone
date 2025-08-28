import { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Section,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "@/components/Sections";
import "./Home.scss";
import TopButton from "@/components/TopButton/TopButton";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

interface HomeProps {
  setHeaderVisible?: (visible: boolean) => void;
}

const Home = ({ setHeaderVisible }: HomeProps) => {
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  // 데스크톱인지 체크하는 함수
  const isDesktop = useCallback(() => window.innerWidth > 767, []);
  const wasDesktopRef = useRef(isDesktop());

  useGSAP(
    () => {
      // ---- header scroll trigger ----
      if (section1Ref.current && setHeaderVisible) {
        ScrollTrigger.create({
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            const showHeader = self.progress < 0.5;
            setHeaderVisible(showHeader);
          },
          onEnter: () => setHeaderVisible(true),
          onLeave: () => setHeaderVisible(false),
          onLeaveBack: () => setHeaderVisible(true),
        });
      }

      // ---- Sections Fullpage Scroll (데스크톱) ----
      sectionsRef.current =
        gsap.utils.toArray<HTMLElement>(".section_container");

      const handleWheel = (e: WheelEvent) => {
        if (!isDesktop()) return;

        const isLastSection =
          currentIndex.current === sectionsRef.current.length - 1;

        // 마지막 섹션 + 아래로 스크롤 (푸터) 일반 스크롤 허용
        if (isLastSection && e.deltaY > 0) {
          return;
        }

        e.preventDefault();
        if (isAnimating.current) return;

        // deltaY 값에 상관없이 한 번에 1단계 이동
        const direction = e.deltaY > 0 ? 1 : -1;
        let targetIndex = currentIndex.current + direction;

        // 범위 제한
        targetIndex = Math.max(
          0,
          Math.min(targetIndex, sectionsRef.current.length - 1)
        );

        goToSection(targetIndex);
      };

      const goToSection = (targetIndex: number) => {
        if (targetIndex === currentIndex.current) return;

        isAnimating.current = true;

        const y = targetIndex * window.innerHeight;

        gsap.to(window, {
          scrollTo: { y },
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            currentIndex.current = targetIndex;
            isAnimating.current = false;
          },
        });
      };

      window.addEventListener("wheel", handleWheel, { passive: false });

      // 리사이즈 시 currentIndex 초기화 (모바일 - 데스크톱 전환 시)
      const handleResize = () => {
        const nowDesktop = isDesktop();

        // 데스크톱 - 모바일 전환 시에만 초기화
        if (wasDesktopRef.current !== nowDesktop) {
          const currentScrollY = window.scrollY;
          const sectionHeight = window.innerHeight;
          currentIndex.current = Math.round(currentScrollY / sectionHeight);

          wasDesktopRef.current = nowDesktop;
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="home">
      <div className="section_container" ref={section1Ref}>
        <Section targetRef={section2Ref} />
      </div>
      <div className="section_container" ref={section2Ref}>
        <Section2 />
      </div>
      <div className="section_container">
        <Section3 />
      </div>
      <div className="section_container">
        <Section4 />
      </div>
      <div className="section_container">
        <Section5 />
      </div>
      <div className="section_container">
        <Section6 />
      </div>
      <TopButton sectionRef={section1Ref} />
    </div>
  );
};

export default Home;
