import Jobru1 from "../assets/5.jpg";
import Jobru2 from "../assets/8.jpg";
import "./WedoStyles.css";

const Wedo = () => {
  return (
    <div className="wedo">
      <h1>What We Do?</h1>
      <p>
        we create points of view, stories and history in the form of photos and
        videos
      </p>
      <div className="first-do">
        <div className="do-text">
          <h2>Photography & Videography</h2>
          <p>
            Step into a world where moments are frozen in time and memories are
            transformed into captivating visual stories. At our photography
            studio, we specialize in crafting timeless narratives through the
            lens, bringing to life the essence of every cherished moment.
            Whether it's a milestone celebration, a family portrait, or a
            corporate event, our team of skilled photographers is dedicated to
            capturing the magic that unfolds before our cameras.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Jobru1} />
          <img alt="img" src={Jobru2} />
        </div>
      </div>
    </div>
  );
};

export default Wedo;
