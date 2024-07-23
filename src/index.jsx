import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.jsx";
import Hobbies from "./Hobbies.jsx";
import Contact from "./Contact.jsx";
import "./style.css";

const App = () => {
  return (
    <div>
      <Heading name="Karolina Wadecka" />
      <Hobbies
        best="being discord mod! The best job ever.. :)"
        outdoor="going on a walk with a dog!"
        indoor="coding and spending time with my family!"
      />
      <Contact greeting="Contact me!" callToAction="Schedule a meeting!"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
