import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/4.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Services"
        text="We provide several photo and video services:
        pre-wedding, weddings, private sessions, products for sale, and other professional services"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
