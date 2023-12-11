import "./OurPeopleStyles.css";
import OurPeopleData from "./OurPeopleData";
import Trip1 from "../assets/16.jpg";
import Trip2 from "../assets/18.jpg";
import Trip3 from "../assets/14.jpg";
import Trip4 from "../assets/15.jpg";
import Trip5 from "../assets/17.jpg";
import Trip6 from "../assets/19.jpg";

function OurPeople() {
  return (
    <div className="ourpeople">
      <div className="peoplecard">
        <OurPeopleData
          image={Trip1}
          heading="Lila Lensmith"
          text="Specializing in portrait photography, Lila combines technical expertise with a creative flair, ensuring that every shot tells a unique and compelling story."
        />
        <OurPeopleData
          image={Trip2}
          heading="Max Shutterfield"
          text="Known for his mastery of high-speed photography and innovative video techniques, Max pushes the boundaries of visual storytelling. His work often reflects a fusion of artistic expression and technical precision."
        />
        <OurPeopleData
          image={Trip3}
          heading="Serena Framecaster"
          text="Her portfolio spans from breathtaking landscape photography to emotionally charged cinematic storytelling, showcasing her adaptability and passion for visual arts."
        />
        <OurPeopleData
          image={Trip4}
          heading="Ethan Cinematico"
          text="ith a background in both still photography and videography, Ethan's work evokes a sense of drama and emotion, making each project a captivating visual experience."
        />
        <OurPeopleData
          image={Trip5}
          heading="Ava Shutterworth"
          text="With a background in photojournalism, Ava has an uncanny ability to capture raw and authentic moments, whether it's a bustling cityscape or an intimate family gathering."
        />
        <OurPeopleData
          image={Trip6}
          heading="Oscar smith"
          text="With a passion for pushing the boundaries of image quality, Oscar is known for his meticulous attention to detail, resulting in visually stunning and technically flawless creations."
        />
      </div>
    </div>
  );
}

export default OurPeople;
