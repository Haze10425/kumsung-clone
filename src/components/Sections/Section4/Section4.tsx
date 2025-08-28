import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { textbooks } from "@/data/textbooks";
import "swiper/css";
import "swiper/css/pagination";
import "./Section4.scss";

const Section4 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section4">
      <span className="keyword">“예술과 체육 그리고 인공지능”</span>
      <h3 className="section_title">
        미래 교육에 <span>진심이 담긴</span>
        <span>금성의 도약</span>
      </h3>
      <div className="btn_wrap">
        <button className="btn_rounded btn_dark icon_dislike_dark">
          <span className="blind">dislike</span>
        </button>
        <button className="btn_rounded icon_like_hover">
          <span className="blind">like</span>
        </button>
      </div>

      <div className="textbook_container">
        {isMobile ? (
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet textbook-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active textbook-bullet-active",
            }}
            modules={[Pagination, Autoplay]}
            className="textbook_swiper"
          >
            {textbooks.map((book, index) => (
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="textbook" key={index}>
                  <a
                    href="#!"
                    onClick={(e) => e.preventDefault()}
                    className={`textbook_link ${book.className}`}
                  >
                    <h4 className="grade">
                      {book.grade}
                      <span className={`dot ${book.className}`}>.</span>
                    </h4>
                    <span className={`desc ${book.className}`}>
                      {book.desc}
                    </span>
                    <div className="textbook_img">
                      <img src={book.image}></img>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          textbooks.map((book, index) => (
            <div className="textbook" key={index}>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className={`textbook_link ${book.className}`}
              >
                <h4 className="grade">
                  {book.grade}
                  <span className={`dot ${book.className}`}>.</span>
                </h4>
                <span className={`desc ${book.className}`}>{book.desc}</span>
                <div className="textbook_img">
                  <img src={book.image}></img>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Section4;
