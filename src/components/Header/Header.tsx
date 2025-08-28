import { useState } from "react";
import Logo from "@/components/Logo/Logo";
import { navItems } from "@/data/navItems";
import "./Header.scss";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className={`header ${className}`}>
      <div className="header_container">
        <h1 className="header_logo">
          <a href="#!" onClick={(e) => e.preventDefault()}>
            <Logo />
          </a>
        </h1>
        <nav>
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    {item.menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="moblie_nav">
          <button className="btn_nav" onClick={handleToggle}>
            <span className="blind">모바일 메뉴 열기</span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lnb_wrap_moblie">
            <div className="lnb_header">
              <Logo color="#121212" width="98px" />
              <button className="btn_close" onClick={handleToggle}>
                <img src="./images/icons/ico-close.png" alt="닫기" />
              </button>
            </div>
            <ul className="lnb_list">
              {navItems.map((item, index) => {
                return (
                  <li className="lnb_item" key={index}>
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      {item.menu}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
