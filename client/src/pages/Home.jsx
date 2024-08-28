// import "./css/Home.css";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <>
      <div id="mainFlex">
      <div className="absolute top-[40%] left-[60%]">
  <div className="w-full h-full rainbow flex -z-0">
    <div className="h-[250px] w-[450px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <span className="text-white font-bold text-xl">hi</span>
    </div>
  </div>
</div>

        <div className="mainTitle z-10">
          <span id="gradCol">Transforming Healthcare with AI: </span>
          <span id="li">Meet Your Virtual Health Assistant for Instant Patient Triage and Support</span>
          <span id="line1">Start Your Health</span>
          <span id="line2">Assessment Now.</span>
          <div className="gsButton">
            <ScrollLink
              to="/sign"
              id="signUp"
              style={{
                cursor: "pointer",
              }}
            >
              <Link to="sign">
                <span className="yay">Get Started</span>
              </Link>
            </ScrollLink>
            <div className="backBlue"></div>
          </div>
        </div>
        {/* <div id="heroImg" className="z-10">
          <img src="/coupleDoc.svg"></img>
        </div> */}
      </div>

      <div className="masterFeature" id="features">
        <div className="featureHead">
          <span>
            <h2 id="feat">FEATURES WE PROVIDE</h2>
          </span>
          <span>
            <h1 id="heading">At-home symptom management and relief solutions</h1>
          </span>
          <span>Discover our innovative health solutions</span>
         
        </div>
        
        <div className="embCard">
          <span className="featImg">
            <img src="/food.svg"></img>
          </span>
          <span className="featTit">Remedies Recommendation</span>
          <span className="featDes">
          Suggests personalized remedies and lifestyle changes based on symptoms, health conditions, and patient history
          </span>
        </div>
        <div className="embCard">
          <span className="featImg">
            <img src="/bot.svg"></img>
          </span>
          <span className="featTit">Interactive Chatbot</span>
          <span className="featDes">
          Patients can access the chatbot at any time, 24/7 Access.
          </span>
        </div>
        
        
      </div>
    </>
  );
}

export default Home;
