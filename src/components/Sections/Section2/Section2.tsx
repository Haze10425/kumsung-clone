import { tagCloudLabels } from "@/data/tagCloudData";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import "./Section2.scss";

interface TagCloudOptions {
  radius?: number;
  maxSpeed?: "slow" | "normal" | "fast";
  initSpeed?: "slow" | "normal" | "fast";
  direction?: number;
  keep?: boolean;
  useContainerInlineStyles?: boolean;
  useItemInlineStyles?: boolean;
  itemClass?: string;
}

const Section2 = () => {
  return (
    <section className="section2">
      <TagCloud
        className="tagCloudContainer"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(920, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
          initSpeed: "normal",
          itemClass: "tagCloud_item",
          keep: true,
        })}
      >
        {tagCloudLabels}
      </TagCloud>
      <div className="subtitle_container">
        <img src="/images/sec02-logo.png" className="logo_icon" />
        <h3>
          누적 발행 부수 <br />
          1억 6,340만부
        </h3>
      </div>
    </section>
  );
};

export default Section2;
