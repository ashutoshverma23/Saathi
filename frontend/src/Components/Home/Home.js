import "./Home.css";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <body>
        <section className="home">
          <div className="left">
            <div className="heading-text">
              <h1 id="brand">SAATHI</h1>
              <h2 align="center" id="slogan">
                Your Personal mental health companion
              </h2>
            </div>
            <div className="buttons">
              <button id="button1"><Link to="/aboutus">Know More</Link></button>
              {/* <Link to="/chat"></Link> */}
            </div>
            <div className="stats">
            </div>
          </div>

          {/* right components */}
          <div className="right">
            <img src={require("./chatbot.png")} alt="chatbot" className="chatbot" />
            <div className="buttons">
              {/* adding link to the chatbot url here */}
              <Link to="/chat"><button id="button1">Chat</button> </Link>
            </div>
            <div className="stats">
            </div>
          </div>
        </section>
      </body >
      <Footer />
    </>
  );
};




export default Home;
