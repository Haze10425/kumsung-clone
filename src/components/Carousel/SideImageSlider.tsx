import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "./SideImageSlider.scss";

interface SideImageSliderProps {
  images: { src: string; alt: string }[];
  speed?: number;
  className?: string;
}

const SideImageSlider = ({
  images,
  speed = -0.3,
  className = "",
}: SideImageSliderProps) => {
  return (
    <div className={`sideImageSlider ${className}`}>
      <Splide
        options={{
          type: "loop",
          focus: "center",
          direction: "ttb",
          width: "240px",
          height: "100vh",
          cover: false,
          arrows: false,
          gap: "30px",
          perPage: "auto",
          pagination: false,
          autoScroll: {
            speed: speed,
            autoStart: true,
            pauseOnHover: false,
          },
          autoHeight: true,
        }}
        extensions={{ AutoScroll }}
      >
        {images.map((image, index) => {
          return (
            <SplideSlide key={index + 1}>
              <img
                src={image.src}
                alt={image.alt}
                className="slide_image"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default SideImageSlider;
