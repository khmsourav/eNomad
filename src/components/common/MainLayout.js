import {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      if(window.scrollY > 870) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, [])

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="main-wrapper">
      <Header />
      <main className="main-layout">
        {props.children}
      </main>
      <Footer />
      <div className={`scroller-button ${showScrollButton ? 'active' : ''}`} onClick={() => handleScroll()}></div>
    </div>
  );
};

export default MainLayout;
