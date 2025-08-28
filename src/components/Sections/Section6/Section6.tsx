import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { historyData } from "@/data/historyData";
import { dotColors, lineGradients, yPoints } from "@/data/lineGradients";
import "./Section6.scss";


const Section6 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const scrollTriggerConfig = {
      trigger: sectionRef.current,
      start: "top 80%",
      toggleActions: "restart none restart none",
    };

    const texts = sectionRef.current.querySelectorAll(".data_text, .dot");
    const targets = sectionRef.current.querySelectorAll(
      ".section_title_wrap, .line_wrap"
    );
    
    gsap.fromTo(
      texts,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power1.out",
        stagger: 0.05,
        scrollTrigger: scrollTriggerConfig,
      }
    );
    gsap.fromTo(
      targets,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: scrollTriggerConfig,
      }
    );
  }, []);

  return (
    <section className="section6" ref={sectionRef}>
      <div className="section_title_wrap">
        <h2>
          금성교과서
          <br />
          46년의 기록
        </h2>
        <h3>드디어 예술과 기술의 융합 완성</h3>
        <div className="icon_art">
          <img src="/images/icons/ico-art.png" />
        </div>
      </div>

      <div className="line_wrap">
        <svg className="svg_line">
          <defs>
            {lineGradients.map(({ id, from, to }) => (
              <linearGradient
                key={id}
                id={id}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={from} />
                <stop offset="100%" stopColor={to} />
              </linearGradient>
            ))}
          </defs>
          {yPoints.slice(0, -1).map((y1, index) => {
            const x1 = `${index * 10}%`;
            const x2 = `${(index + 1) * 10}%`;
            const y2 = yPoints[index + 1];
            return (
              <line
                key={index}
                x1={x1}
                y1={`${y1}%`}
                x2={x2}
                y2={`${y2}%`}
                stroke={`url(#${lineGradients[index].id})`}
                strokeWidth={4}
              />
            );
          })}
        </svg>
      </div>

      <div className="history_data_container">
        <div className="history_data_mo_bg"></div>
        <ul className="history_data_list">
          {historyData.map((item, index) => (
            <li key={index} className="history_data_item">
              <div
                className="data_item_wrap"
                style={{ bottom: `${item.position}%` }}
              >
                <div className="data_text">
                  <span style={{ color: dotColors[index] }}>{item.period}</span>
                  <span>{item.curriculum}</span>
                  <span>{item.years}</span>
                </div>
                <div className="dot"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section6;
