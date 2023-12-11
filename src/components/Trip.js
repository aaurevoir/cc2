import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/11.jpg";
import Trip2 from "../assets/13.jpg";
import Trip3 from "../assets/12.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Projects</h1>
      <p> We carry out projects with our heart and passion</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Wedding"
          text="frame your happy wedding memories with NTProduction"
        />
        <TripData
          image={Trip2}
          heading="Product Services"
          text="increase sales with photos that are appropriate and have great company quality"
        />
        <TripData
          image={Trip3}
          heading="Private Session"
          text="we have a comfortable studio for formal and casual purposes"
        />
      </div>
    </div>
  );
}

export default Trip;
