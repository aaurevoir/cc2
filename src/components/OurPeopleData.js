import "./OurPeopleStyles.css";
import OurPeople from "./OurPeople";

function OurPeopleData(props) {
  return (
    <div className="o-card">
      <div className="o-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default OurPeopleData;
