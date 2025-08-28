import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
  children?: React.ReactNode;
  headerVisible?: boolean;
}

const Layout = ({ children, headerVisible = true }: LayoutProps) => {
  return (
    <div className="layout">
      <Header className={headerVisible ? "visible" : "hidden"} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
