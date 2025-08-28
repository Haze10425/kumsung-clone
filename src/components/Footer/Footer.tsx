import Logo from "@/components/Logo/Logo";
import { familySite } from "@/data/familySite";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_menu_wrap">
        <ul className="footer_menu">
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              회사소개
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              문의전화
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              이용약관
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              개인정보처리방침
            </a>
          </li>
        </ul>
        <div className="address_wrap">
          <span className="logo">
            <Logo width="94" height="14" color="#b3b3b3" />
          </span>
          <address>
            <span>(주)금성출판사</span>
            <span>서울특별시 마포구 만리재옛길 23</span>
            <span>교과서 관련 문의 080-969-1000</span>
            <p> Copyright©Kumsung Publishing.,Ltd All Right Reserved. </p>
            <a href="#!" className="link_privacy" onClick={(e) => e.preventDefault()}>
              개인정보 취급 처리 방침</a>
          </address>
          <ul className="sns_menu">
            <li>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className="link_sns"
              >
                <img
                  src="./images/icons/ico-kakaostory.png"
                  alt="카카오스토리"
                />
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className="link_sns"
              >
                <img src="./images/icons/ico-blog.png" alt="블로그" />
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className="link_sns"
              >
                <img src="./images/icons/ico-instagram.png" alt="인스타그램" />
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={(e) => e.preventDefault()}
                className="link_sns"
              >
                <img src="./images/icons/ico-facebook.png" alt="페이스북" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="family_site_wrap">
        <h6>family site</h6>
        <div className="family_site">
          {familySite.map((site, index) => {
            return (
              <a key={index} href="#!" onClick={(e) => e.preventDefault()}>
                {site}
                <span className="icon_link"></span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
