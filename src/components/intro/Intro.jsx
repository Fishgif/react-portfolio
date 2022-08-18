import "./intro.scss";
import profile2 from "../../assets/profile2.PNG";
import down from "../../assets/down.png";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={profile2} alt="img" className="img" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Marc Fischer</h1>
          <h3> I am  full stack Developer
            <div>Proficient in:</div>
            <br/>
            <span>React</span> 
            <br/>
            <span>JS</span>
            <br/>
            <span>Node</span>
          </h3>
          
        </div>

        <a href="#portfolio"> 
        <img className="image2" src={down} alt="" /></a>
      </div>
    </div>
  );
}
