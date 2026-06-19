import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./MyStory.css";
import Header from './Header';

function MyStory() {
  return (
    <>
    <Header />
    <section className="about-section" id="my-story">
      
      <div className="about-image">
        <img src="/images/jackie-rath.jpg" alt="Jackie Rath" />
      </div>

      <div className="about-content">
        <span className="about-tag">Meet Jackie Rath</span>

        <h1>Real Estate with Heart. Results with Care.</h1>

        <p>
          Hi, I'm Jackie Rath, REALTOR® and founder of AMTS Properties.
          As a Pierce County homeowner, mom of six, and local real estate
          professional, I understand that buying or selling a home is more than
          a transaction—it's a major life decision.
        </p>

        <p>
          My goal is to help clients navigate the process with clear
          communication, realistic expectations, and support that respects their
          time, goals, and season of life.
        </p>

        <p>
          I proudly serve Pierce County, Thurston County, and communities
          throughout the South Sound.
        </p>
      </div>
    </section>
    </>
  );
}

export default MyStory;