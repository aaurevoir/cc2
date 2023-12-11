import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/10.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import OurPeople from "../components/OurPeople";

function Team() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Teams"
        url="/"
        btnClass="hide"
      />
      <OurPeople />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Team;
