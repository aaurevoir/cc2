import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Wedo from "../components/Wedo";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/5336492/pexels-photo-5336492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Living Through Lense"
        text="Choose Your Favourite Moments."
        buttonText="Event Plan"
        url="/"
        btnClass="show"
      />
      <Wedo />
      <Trip />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
